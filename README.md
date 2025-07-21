# ISRO Website - Indian Space Research Organisation

A comprehensive, responsive, and accessible website for the Indian Space Research Organisation (ISRO) built with HTML, CSS, and JavaScript. The website follows ISRO's brand guidelines and provides an intuitive interface for exploring India's space missions and programs.

## 🚀 Features

### 🎨 Design & UI
- **ISRO Brand Colors**: Deep Blue (#002B5C), Saffron Orange (#F47C20), Light Blue (#d1e8ff)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: WCAG compliant with keyboard navigation, screen reader support, and font size controls
- **Modern UI**: Clean design with smooth animations and transitions

### 📱 Responsive Layout
- **Mobile-First Approach**: Seamless experience across all devices
- **Adaptive Navigation**: Collapsible menu for mobile devices
- **Flexible Grid System**: Content adapts to different screen sizes
- **Touch-Friendly**: Optimized for touch interactions

### 🛰️ Core Sections

#### 1. **Header & Navigation**
- ISRO logo with Hindi and English text
- Multi-level dropdown navigation menu
- Search functionality
- Accessibility controls (font size, skip links)
- Social media links

#### 2. **Hero Section**
- Full-width video background
- Inspirational tagline: "Touching lives while touching the stars"
- Video controls (play/pause, mute/unmute)

#### 3. **Upcoming Missions**
- Dynamic card-based layout
- Mission details including launch date, vehicle, and objectives
- "Add Project" functionality with form validation
- Automatic migration of past-due missions

#### 4. **Spacecraft Missions**
- Comprehensive table of completed missions
- Search and filter capabilities
- Detailed mission information modals
- Links to resources (brochures, videos, tracking, galleries)
- Sample missions: EOS-09, NVS-02, SPADEX-A/B, Proba-3

#### 5. **Footer**
- Contact information and address
- Comprehensive link directory
- Government compliance links
- Brand logos and certifications

### 🔧 Interactive Features

#### Mission Management
- **Add New Projects**: Form-based project addition
- **Automatic Classification**: Projects automatically move to appropriate sections based on launch dates
- **Detailed Views**: Expandable mission details with technical specifications
- **Resource Links**: Direct access to brochures, videos, and tracking data

#### Search & Filter
- **Real-time Search**: Instant filtering of missions
- **Category Filters**: Filter by mission type (Navigation, Communication, etc.)
- **Smart Matching**: Search across multiple fields (name, vehicle, application)

#### Accessibility Features
- **Font Size Controls**: A+, A, A- buttons for text scaling
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic markup
- **Skip Links**: Quick navigation to main content
- **High Contrast Mode**: Support for users with visual impairments

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Custom Properties (variables)
- **JavaScript (ES6+)**: Object-oriented programming with classes
- **Font Awesome**: Icons for enhanced UI
- **No External Dependencies**: Pure vanilla JavaScript implementation

## 📁 Project Structure

```
isro-website/
├── index.html          # Main HTML file
├── styles.css          # Comprehensive CSS styling
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Static assets (if needed)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for best experience)

### Installation

1. **Clone or Download** the project files
```bash
git clone <repository-url>
cd isro-website
```

2. **Open in Browser**
```bash
# Option 1: Direct file opening
open index.html

# Option 2: Using Python server
python -m http.server 8000

# Option 3: Using Node.js server
npx serve .
```

3. **Access the Website**
- Direct: `file:///path/to/index.html`
- Server: `http://localhost:8000`

## 📋 Usage Guide

### Adding New Missions
1. Navigate to the "Upcoming Missions" section
2. Click the "Add Project" button
3. Fill in the required information:
   - Project Name *
   - Description *
   - Launch Date *
   - Objective *
   - Launch Vehicle (optional)
   - Orbit Type (optional)
   - Application (optional)
4. Submit the form

**Note**: Projects with past launch dates are automatically moved to "Spacecraft Missions"

### Searching Missions
1. Use the search bar in the navigation or the mission filter section
2. Enter keywords related to mission name, vehicle, or application
3. Use the dropdown filter to narrow results by mission type

### Viewing Mission Details
1. Click "More Info" on upcoming mission cards
2. Click "Details" or "Links" buttons in the spacecraft missions table
3. View comprehensive information including technical details and resources

### Accessibility Features
- **Font Size**: Use A+, A, A- buttons in the top navigation
- **Keyboard Navigation**: Use Tab, Enter, and arrow keys
- **Screen Readers**: All content is properly labeled

## 🎯 Key Features Implemented

### ✅ From Requirements Specification

1. **ISRO Brand Compliance**
   - ✅ Exact color scheme (#002B5C, #F47C20, #d1e8ff)
   - ✅ Hindi and English text in header
   - ✅ Government of India branding

2. **Navigation Structure**
   - ✅ Multi-level dropdown menus
   - ✅ Search functionality
   - ✅ Accessibility controls
   - ✅ Social media integration

3. **Mission Management**
   - ✅ Dynamic upcoming missions display
   - ✅ Comprehensive spacecraft missions table
   - ✅ Add project functionality
   - ✅ Automatic date-based migration

4. **Sample Data**
   - ✅ Gaganyaan, NISAR, Shukrayaan-1 (upcoming)
   - ✅ EOS-09, NVS-02, SPADEX-A/B, Proba-3 (completed)
   - ✅ GSLV-F15/NVS-02 detailed mission report

5. **Interactive Elements**
   - ✅ Video controls in hero section
   - ✅ Modal dialogs for detailed views
   - ✅ Form validation and submission
   - ✅ Search and filter functionality

6. **Footer Compliance**
   - ✅ Exact address and contact information
   - ✅ All required legal and navigation links
   - ✅ Government logos and certifications

## 🔧 Customization

### Adding New Missions
Modify the `loadInitialData()` method in `script.js`:

```javascript
this.upcomingMissions.push({
    id: 'unique-id',
    name: 'Mission Name',
    description: 'Mission description',
    launchDate: 'YYYY-MM-DD',
    objective: 'Mission objective',
    launchVehicle: 'Vehicle name',
    orbitType: 'Orbit type',
    application: 'Application type'
});
```

### Styling Modifications
Update CSS custom properties in `styles.css`:

```css
:root {
    --primary-blue: #002B5C;
    --saffron: #F47C20;
    --light-blue: #d1e8ff;
    /* Modify other variables as needed */
}
```

### Adding New Features
Extend the `ISROWebsite` class in `script.js`:

```javascript
class ISROWebsite {
    // Add new methods
    newFeature() {
        // Implementation
    }
}
```

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security Features

- ✅ Input validation and sanitization
- ✅ XSS prevention
- ✅ Safe DOM manipulation
- ✅ No external script dependencies

## 🎯 Performance Optimizations

- ✅ Minimal external dependencies
- ✅ Efficient CSS with variables
- ✅ Optimized JavaScript with modern ES6+ features
- ✅ Responsive images and media
- ✅ Lazy loading for animations

## 📊 Accessibility Compliance

- ✅ **WCAG 2.1 AA** compliance
- ✅ **Semantic HTML5** structure
- ✅ **ARIA** labels and roles
- ✅ **Keyboard navigation** support
- ✅ **Screen reader** compatibility
- ✅ **Color contrast** compliance
- ✅ **Focus management** for modals
- ✅ **Skip links** for quick navigation

## 🐛 Known Issues & Limitations

1. **Video Content**: Sample video data is placeholder - replace with actual ISRO mission videos
2. **Resource Links**: Mission resource links are placeholder - integrate with actual ISRO databases
3. **Real-time Data**: Currently uses static data - can be extended with APIs for live mission data

## 🔮 Future Enhancements

1. **Backend Integration**: Connect to ISRO mission databases
2. **Real-time Updates**: Live mission status and launch tracking
3. **Multi-language Support**: Full Hindi translation
4. **Progressive Web App**: Offline functionality and app-like experience
5. **Advanced Analytics**: Mission statistics and visualization
6. **User Accounts**: Personalized mission tracking

## 📞 Support & Contact

For technical support or questions about this implementation:

- **Email**: [Technical contact]
- **Issues**: [GitHub issues page]
- **Documentation**: This README file

## 📄 License

This project is created as a demonstration of ISRO website implementation. All ISRO branding, logos, and content remain property of the Indian Space Research Organisation.

---

**Built with ❤️ for India's Space Program**

*"Touching lives while touching the stars" - ISRO*
