<?php
/*
Template Name: Investment Trial Class
*/

get_header(); ?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Investing Made Easy - Trial Class</title>
    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/investment-trial.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body <?php body_class(); ?>>

<div class="trial-class-container">
    <!-- Header Banner -->
    <div class="header-banner">
        <h2>2 HOURS TRIAL CLASS (LIVE)</h2>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <div class="content-wrapper">
            <!-- Main Heading -->
            <h1 class="main-heading">INVESTING MADE EASY</h1>
            
            <!-- Subtitle -->
            <div class="subtitle">
                <p>This class is designed to cut through the noise, eliminate overwhelm, and show you</p>
                <p>exactly how to invest with clarity, confidence, and without stress.</p>
            </div>

            <!-- Content Body -->
            <div class="content-body">
                <!-- Left Section - Instructor Info -->
                <div class="instructor-section">
                    <div class="instructor-card">
                        <div class="video-thumbnail">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/instructor-neeraj.jpg" alt="Neeraj Arora" class="instructor-image">
                            <div class="play-button">
                                <i class="fas fa-play"></i>
                            </div>
                            <div class="investment-tags">
                                <span class="tag mutual-fund">Mutual fund</span>
                                <span class="tag stocks">Stocks</span>
                            </div>
                            <div class="chart-overlay">
                                <i class="fas fa-chart-line"></i>
                            </div>
                        </div>
                        
                        <div class="instructor-info">
                            <p class="instructor-title">India's Leading Finance Educator</p>
                            <h3 class="instructor-name">Neeraj Arora</h3>
                            <p class="instructor-description">I built 30+ crore corpus Started investing journey with 2000 rupees</p>
                        </div>
                    </div>
                </div>

                <!-- Right Section - Trial Details -->
                <div class="trial-details-section">
                    <div class="trial-card">
                        <h3 class="trial-heading">
                            <span class="trial-text">Trial Class</span>
                            <span class="details-text">Details</span>
                        </h3>
                        
                        <div class="detail-rows">
                            <div class="detail-row">
                                <div class="detail-item">
                                    <div class="icon-wrapper date-icon">
                                        <i class="fas fa-calendar-alt"></i>
                                    </div>
                                    <div class="detail-content">
                                        <span class="label">Date</span>
                                        <span class="value">Thu, 31st Jul 25</span>
                                    </div>
                                </div>
                                
                                <div class="detail-item">
                                    <div class="icon-wrapper time-icon">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div class="detail-content">
                                        <span class="label">Time</span>
                                        <span class="value">7:00 PM</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="detail-row">
                                <div class="detail-item">
                                    <div class="icon-wrapper language-icon">
                                        <i class="fas fa-globe"></i>
                                    </div>
                                    <div class="detail-content">
                                        <span class="label">Language</span>
                                        <span class="value">Hindi</span>
                                    </div>
                                </div>
                                
                                <div class="detail-item">
                                    <div class="icon-wrapper live-icon">
                                        <i class="fas fa-video"></i>
                                    </div>
                                    <div class="detail-content">
                                        <span class="label">LIVE</span>
                                        <span class="value">On ZOOM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Book Trial Button -->
                        <button class="book-trial-btn" onclick="bookTrialClass()">
                            BOOK YOUR TRIAL CLASS ₹99
                        </button>
                        
                        <!-- Rating Section -->
                        <div class="rating-section">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="rating-text">
                                <p><strong>Rated 4.9/5</strong> by learners who took action and saw results.</p>
                                <p><strong>Trusted by Over 18303 Learners</strong></p>
                            </div>
                            <div class="user-avatars">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/avatar1.jpg" alt="User 1" class="avatar">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/avatar2.jpg" alt="User 2" class="avatar">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/avatar3.jpg" alt="User 3" class="avatar">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/avatar4.jpg" alt="User 4" class="avatar">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Booking Modal -->
<div id="bookingModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Book Your Trial Class</h2>
        <form id="bookingForm" method="POST" action="<?php echo admin_url('admin-post.php'); ?>">
            <input type="hidden" name="action" value="book_trial_class">
            <?php wp_nonce_field('book_trial_class_nonce', 'trial_class_nonce'); ?>
            
            <div class="form-group">
                <label for="fullName">Full Name *</label>
                <input type="text" id="fullName" name="full_name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required>
            </div>
            
            <div class="form-group">
                <label for="experience">Investment Experience</label>
                <select id="experience" name="experience">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            </div>
            
            <div class="payment-section">
                <h3>Payment Details</h3>
                <div class="price-display">
                    <span class="currency">₹</span>
                    <span class="amount">99</span>
                    <span class="period">Trial Class Fee</span>
                </div>
            </div>
            
            <button type="submit" class="submit-btn">
                <i class="fas fa-credit-card"></i>
                Proceed to Payment
            </button>
        </form>
    </div>
</div>

<script src="<?php echo get_template_directory_uri(); ?>/js/investment-trial.js"></script>

<?php
// Handle form submission
add_action('admin_post_book_trial_class', 'handle_trial_class_booking');
add_action('admin_post_nopriv_book_trial_class', 'handle_trial_class_booking');

function handle_trial_class_booking() {
    if (!wp_verify_nonce($_POST['trial_class_nonce'], 'book_trial_class_nonce')) {
        wp_die('Security check failed');
    }
    
    $full_name = sanitize_text_field($_POST['full_name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $experience = sanitize_text_field($_POST['experience']);
    
    // Store booking in database
    global $wpdb;
    $table_name = $wpdb->prefix . 'trial_class_bookings';
    
    $result = $wpdb->insert(
        $table_name,
        array(
            'full_name' => $full_name,
            'email' => $email,
            'phone' => $phone,
            'experience' => $experience,
            'booking_date' => current_time('mysql'),
            'status' => 'pending'
        )
    );
    
    if ($result) {
        // Send confirmation email
        $subject = 'Trial Class Booking Confirmation';
        $message = "Dear $full_name,\n\nThank you for booking the Investment Trial Class!\n\nClass Details:\nDate: Thu, 31st Jul 25\nTime: 7:00 PM\nPlatform: Zoom\n\nYou will receive the Zoom link shortly.\n\nBest regards,\nNeeraj Arora";
        wp_mail($email, $subject, $message);
        
        wp_redirect(add_query_arg('booking', 'success', wp_get_referer()));
    } else {
        wp_redirect(add_query_arg('booking', 'error', wp_get_referer()));
    }
    exit;
}

wp_footer(); ?>
</body>
</html>

<?php get_footer(); ?>