# Investment Trial Class - WordPress Implementation

## Overview
This is a complete WordPress implementation for an investment trial class booking system featuring Neeraj Arora as the instructor. The design matches the provided UI mockup with modern styling, responsive design, and full booking functionality.

## Files Included

### Core Files
- `investment-trial-class.php` - Main WordPress template file
- `css/investment-trial.css` - Complete styling for the UI
- `js/investment-trial.js` - Interactive functionality and form handling
- `database-setup.php` - Database table creation and admin interface

### Features
- ✅ Responsive design matching the original UI
- ✅ Modal booking form with validation
- ✅ Database storage for bookings
- ✅ Admin dashboard for managing bookings
- ✅ Email confirmation system
- ✅ Payment integration ready
- ✅ Export functionality (CSV)
- ✅ Security features (nonces, sanitization)

## Installation Instructions

### Step 1: Upload Files
1. Upload `investment-trial-class.php` to your active theme's root directory
2. Create `css` and `js` folders in your theme directory if they don't exist
3. Upload `investment-trial.css` to the `css` folder
4. Upload `investment-trial.js` to the `js` folder

### Step 2: Database Setup
1. Add the code from `database-setup.php` to your theme's `functions.php` file
2. Or create a custom plugin with this code for better organization

### Step 3: Create Page
1. Go to WordPress Admin → Pages → Add New
2. Set the title as "Investment Trial Class"
3. In the Page Attributes box, select "Investment Trial Class" as the template
4. Publish the page

### Step 4: Add Required Images
Create an `images` folder in your theme directory and add:
- `instructor-neeraj.jpg` - Instructor photo
- `avatar1.jpg`, `avatar2.jpg`, `avatar3.jpg`, `avatar4.jpg` - User testimonial avatars

### Step 5: Configure Settings
1. Go to WordPress Admin → Trial Bookings to manage bookings
2. Test the booking form to ensure everything works
3. Configure email settings if needed

## File Structure
```
your-theme/
├── investment-trial-class.php
├── css/
│   └── investment-trial.css
├── js/
│   └── investment-trial.js
├── images/
│   ├── instructor-neeraj.jpg
│   ├── avatar1.jpg
│   ├── avatar2.jpg
│   ├── avatar3.jpg
│   └── avatar4.jpg
└── functions.php (add database-setup.php code here)
```

## Customization Options

### 1. Change Class Details
Edit the following in `investment-trial-class.php`:
- Date and time
- Price (₹99)
- Instructor information
- Class description

### 2. Styling Modifications
All styles are in `css/investment-trial.css`:
- Colors: Search for `#28a745` (primary green) to change the color scheme
- Fonts: Modify the font-family declarations
- Spacing: Adjust padding and margin values

### 3. Form Fields
Add or modify form fields in the booking modal section of `investment-trial-class.php`

## Admin Features

### Booking Management
- View all bookings in a table format
- Filter by status (pending, approved, rejected)
- Approve or reject bookings
- Export bookings to CSV
- Statistics dashboard

### Email System
- Automated confirmation emails
- HTML formatted emails
- Customizable email templates

## Payment Integration

The system is ready for payment integration. To add payment processing:

1. Choose a payment gateway (Razorpay, PayPal, Stripe)
2. Add payment gateway scripts in the modal
3. Modify the form submission handler in `js/investment-trial.js`
4. Update the database to track payment status

### Example Razorpay Integration
```javascript
// Add to js/investment-trial.js
var options = {
    "key": "YOUR_RAZORPAY_KEY",
    "amount": "9900", // ₹99 in paise
    "currency": "INR",
    "name": "Investment Trial Class",
    "description": "Trial Class Booking",
    "handler": function (response) {
        // Handle successful payment
        submitBookingForm(response.razorpay_payment_id);
    }
};
var rzp1 = new Razorpay(options);
```

## Security Features

- CSRF protection with WordPress nonces
- Input sanitization and validation
- SQL injection prevention
- XSS protection
- Capability checks for admin functions

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 16+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Optimized CSS with efficient selectors
- Minified external libraries (Font Awesome, Google Fonts)
- Lazy loading for animations
- Efficient database queries with indexes

## Troubleshooting

### Common Issues

1. **Styles not loading**
   - Check if CSS file path is correct
   - Ensure theme directory structure matches

2. **Form not submitting**
   - Verify database table was created
   - Check WordPress error logs
   - Ensure proper file permissions

3. **Images not displaying**
   - Upload required images to the images folder
   - Check file paths in the template

4. **Email not sending**
   - Configure WordPress SMTP settings
   - Check email server configuration
   - Test with a simple email first

### Debug Mode
Add this to `wp-config.php` for debugging:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

## Mobile Responsiveness

The design is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## SEO Optimization

- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions and titles
- Open Graph tags ready
- Fast loading times

## Future Enhancements

Consider adding:
- Multiple class dates
- Calendar integration
- SMS notifications
- Social media sharing
- Student dashboard
- Course progress tracking
- Review and rating system

## Support

For technical support or customization requests:
- Check WordPress documentation
- Review PHP error logs
- Test in different browsers
- Validate HTML and CSS

## License

This code is provided as-is for educational and commercial use. Customize as needed for your specific requirements.

---

**Note:** Replace placeholder images and customize the content according to your specific needs. The system is designed to be flexible and easily customizable.