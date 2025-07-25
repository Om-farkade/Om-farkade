<?php
/**
 * Database Setup for Investment Trial Class
 * Add this code to your theme's functions.php file or create a plugin
 */

// Create database table on theme activation
add_action('after_setup_theme', 'create_trial_class_bookings_table');

function create_trial_class_bookings_table() {
    global $wpdb;
    
    $table_name = $wpdb->prefix . 'trial_class_bookings';
    
    $charset_collate = $wpdb->get_charset_collate();
    
    $sql = "CREATE TABLE $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        full_name tinytext NOT NULL,
        email varchar(100) NOT NULL,
        phone varchar(20) NOT NULL,
        experience varchar(20) DEFAULT 'beginner',
        booking_date datetime DEFAULT CURRENT_TIMESTAMP,
        status varchar(20) DEFAULT 'pending',
        payment_status varchar(20) DEFAULT 'pending',
        zoom_link text,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        INDEX idx_email (email),
        INDEX idx_booking_date (booking_date),
        INDEX idx_status (status)
    ) $charset_collate;";
    
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
    
    // Add option to track if table was created
    add_option('trial_class_bookings_table_version', '1.0');
}

// Admin menu for managing bookings
add_action('admin_menu', 'trial_class_admin_menu');

function trial_class_admin_menu() {
    add_menu_page(
        'Trial Class Bookings',
        'Trial Bookings',
        'manage_options',
        'trial-class-bookings',
        'trial_class_bookings_page',
        'dashicons-calendar-alt',
        30
    );
}

// Admin page to view bookings
function trial_class_bookings_page() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'trial_class_bookings';
    
    // Handle actions
    if (isset($_GET['action']) && isset($_GET['booking_id'])) {
        $booking_id = intval($_GET['booking_id']);
        $action = sanitize_text_field($_GET['action']);
        
        if ($action === 'approve') {
            $wpdb->update(
                $table_name,
                ['status' => 'approved'],
                ['id' => $booking_id]
            );
            echo '<div class="notice notice-success"><p>Booking approved successfully!</p></div>';
        } elseif ($action === 'reject') {
            $wpdb->update(
                $table_name,
                ['status' => 'rejected'],
                ['id' => $booking_id]
            );
            echo '<div class="notice notice-success"><p>Booking rejected!</p></div>';
        }
    }
    
    // Get all bookings
    $bookings = $wpdb->get_results("SELECT * FROM $table_name ORDER BY booking_date DESC");
    
    ?>
    <div class="wrap">
        <h1>Trial Class Bookings</h1>
        
        <div class="booking-stats" style="display: flex; gap: 20px; margin: 20px 0;">
            <?php
            $total_bookings = $wpdb->get_var("SELECT COUNT(*) FROM $table_name");
            $pending_bookings = $wpdb->get_var("SELECT COUNT(*) FROM $table_name WHERE status = 'pending'");
            $approved_bookings = $wpdb->get_var("SELECT COUNT(*) FROM $table_name WHERE status = 'approved'");
            ?>
            
            <div class="stat-card" style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3 style="margin: 0 0 10px 0; color: #333;">Total Bookings</h3>
                <p style="font-size: 24px; font-weight: bold; color: #28a745; margin: 0;"><?php echo $total_bookings; ?></p>
            </div>
            
            <div class="stat-card" style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3 style="margin: 0 0 10px 0; color: #333;">Pending</h3>
                <p style="font-size: 24px; font-weight: bold; color: #ffc107; margin: 0;"><?php echo $pending_bookings; ?></p>
            </div>
            
            <div class="stat-card" style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h3 style="margin: 0 0 10px 0; color: #333;">Approved</h3>
                <p style="font-size: 24px; font-weight: bold; color: #28a745; margin: 0;"><?php echo $approved_bookings; ?></p>
            </div>
        </div>
        
        <table class="wp-list-table widefat fixed striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Experience</th>
                    <th>Booking Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($bookings as $booking): ?>
                <tr>
                    <td><?php echo $booking->id; ?></td>
                    <td><?php echo esc_html($booking->full_name); ?></td>
                    <td><?php echo esc_html($booking->email); ?></td>
                    <td><?php echo esc_html($booking->phone); ?></td>
                    <td><?php echo ucfirst($booking->experience); ?></td>
                    <td><?php echo date('M j, Y g:i A', strtotime($booking->booking_date)); ?></td>
                    <td>
                        <span class="status-<?php echo $booking->status; ?>" style="
                            padding: 4px 8px; 
                            border-radius: 4px; 
                            font-size: 12px; 
                            font-weight: bold;
                            color: white;
                            background: <?php 
                                echo $booking->status === 'approved' ? '#28a745' : 
                                     ($booking->status === 'rejected' ? '#dc3545' : '#ffc107'); 
                            ?>;">
                            <?php echo ucfirst($booking->status); ?>
                        </span>
                    </td>
                    <td>
                        <?php if ($booking->status === 'pending'): ?>
                            <a href="?page=trial-class-bookings&action=approve&booking_id=<?php echo $booking->id; ?>" 
                               class="button button-primary button-small">Approve</a>
                            <a href="?page=trial-class-bookings&action=reject&booking_id=<?php echo $booking->id; ?>" 
                               class="button button-secondary button-small">Reject</a>
                        <?php endif; ?>
                        <a href="mailto:<?php echo $booking->email; ?>" class="button button-small">Email</a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        
        <?php if (empty($bookings)): ?>
            <div style="text-align: center; padding: 40px; background: #fff; border-radius: 8px; margin-top: 20px;">
                <h3>No bookings yet</h3>
                <p>Trial class bookings will appear here once users start registering.</p>
            </div>
        <?php endif; ?>
    </div>
    
    <style>
        .stat-card {
            flex: 1;
            min-width: 150px;
        }
        
        @media (max-width: 768px) {
            .booking-stats {
                flex-direction: column;
            }
        }
    </style>
    <?php
}

// Export bookings to CSV
add_action('admin_post_export_trial_bookings', 'export_trial_bookings_csv');

function export_trial_bookings_csv() {
    if (!current_user_can('manage_options')) {
        wp_die('Unauthorized');
    }
    
    global $wpdb;
    $table_name = $wpdb->prefix . 'trial_class_bookings';
    $bookings = $wpdb->get_results("SELECT * FROM $table_name ORDER BY booking_date DESC", ARRAY_A);
    
    $filename = 'trial-class-bookings-' . date('Y-m-d') . '.csv';
    
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    
    $output = fopen('php://output', 'w');
    
    // CSV headers
    fputcsv($output, ['ID', 'Full Name', 'Email', 'Phone', 'Experience', 'Booking Date', 'Status']);
    
    // CSV data
    foreach ($bookings as $booking) {
        fputcsv($output, [
            $booking['id'],
            $booking['full_name'],
            $booking['email'],
            $booking['phone'],
            $booking['experience'],
            $booking['booking_date'],
            $booking['status']
        ]);
    }
    
    fclose($output);
    exit;
}

// Add export button to admin page
add_action('admin_footer', 'trial_class_admin_footer_scripts');

function trial_class_admin_footer_scripts() {
    $screen = get_current_screen();
    if ($screen->id === 'toplevel_page_trial-class-bookings') {
        ?>
        <script>
        jQuery(document).ready(function($) {
            $('h1').after('<a href="<?php echo admin_url('admin-post.php?action=export_trial_bookings'); ?>" class="button button-secondary" style="margin-left: 10px;">Export CSV</a>');
        });
        </script>
        <?php
    }
}

// Email templates
function send_trial_class_confirmation_email($booking_data) {
    $to = $booking_data['email'];
    $subject = 'Investment Trial Class - Booking Confirmation';
    
    $message = '
    <html>
    <head>
        <title>Trial Class Confirmation</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #fff; padding: 30px; border: 1px solid #e9ecef; }
            .footer { background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; }
            .button { background: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 20px 0; }
            .details { background: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Investment Trial Class</h1>
                <h2>Booking Confirmed!</h2>
            </div>
            
            <div class="content">
                <p>Dear ' . esc_html($booking_data['full_name']) . ',</p>
                
                <p>Thank you for booking the <strong>Investment Trial Class</strong> with Neeraj Arora!</p>
                
                <div class="details">
                    <h3>Class Details:</h3>
                    <p><strong>Date:</strong> Thursday, 31st July 2025</p>
                    <p><strong>Time:</strong> 7:00 PM IST</p>
                    <p><strong>Duration:</strong> 2 Hours</p>
                    <p><strong>Platform:</strong> Zoom</p>
                    <p><strong>Language:</strong> Hindi</p>
                </div>
                
                <p>You will receive the Zoom meeting link 24 hours before the class via email.</p>
                
                <p><strong>What to expect in this class:</strong></p>
                <ul>
                    <li>Understanding investment basics</li>
                    <li>Mutual funds vs Stocks comparison</li>
                    <li>Risk management strategies</li>
                    <li>Live Q&A session</li>
                </ul>
                
                <p>If you have any questions, please don\'t hesitate to contact our support team.</p>
                
                <p>Best regards,<br>
                <strong>Neeraj Arora</strong><br>
                India\'s Leading Finance Educator</p>
            </div>
            
            <div class="footer">
                <p>This is an automated email. Please do not reply to this email.</p>
            </div>
        </div>
    </body>
    </html>';
    
    $headers = array('Content-Type: text/html; charset=UTF-8');
    
    return wp_mail($to, $subject, $message, $headers);
}

// Hook to send confirmation email after successful booking
add_action('trial_class_booking_success', 'send_trial_class_confirmation_email');

?>