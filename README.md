# Residencial Blanes - Website

A modern, responsive website for Residencial Blanes, a senior care facility located in Montevideo, Uruguay. This website showcases the facility's services, facilities, and provides an easy way for families to get in touch.

## 🏠 About

Residencial Blanes is a family-owned senior care facility with over 10 years of experience providing compassionate care for elderly residents. This website serves as the primary digital presence, helping families learn about the services and make informed decisions about their loved ones' care.

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Glassmorphism Effects**: Modern blur backdrop effects throughout the site
- **Smooth Animations**: Hover effects and smooth scrolling navigation
- **Professional Typography**: Clean, readable fonts with proper hierarchy

### 📱 User Experience
- **Interactive Navigation**: Smooth scrolling to sections with fixed header
- **Image Gallery**: Modal popup with navigation for facility photos
- **Contact Form**: Functional contact form with validation and feedback
- **Accessibility**: Keyboard navigation and screen reader friendly

### 🏥 Content Sections
- **Hero Section**: Video background with call-to-action buttons
- **About Us**: Company story with statistics and visual elements
- **Facilities**: Feature list and photo gallery with modal viewer
- **Services**: Comprehensive list of care services offered
- **Testimonials**: Client testimonials and reviews
- **Why Choose Us**: Benefits and advantages of choosing Blanes
- **FAQ**: Frequently asked questions
- **Contact**: Contact information and inquiry form

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd residencial-blanes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── App.js              # Main application component
├── App.css             # Global styles and component styling
├── index.js            # Application entry point
└── index.css           # Base styles and CSS reset
```

### Key Components

- **Header**: Navigation with smooth scrolling
- **Hero Section**: Video background with overlay content
- **About Section**: Company information with story cards
- **Facilities Section**: Feature grid and image gallery
- **Services Section**: Service list with icons
- **Testimonials**: Client feedback cards
- **Why Choose Us**: Benefits grid
- **FAQ Section**: Accordion-style questions
- **Contact Section**: Contact form and information
- **Footer**: Company information and copyright

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **CSS3**: Advanced styling with flexbox, grid, and custom properties
- **JavaScript ES6+**: Modern JavaScript features
- **HTML5**: Semantic HTML structure

## 🎨 Design Features

### Visual Elements
- **Background Images**: High-quality facility photos
- **Video Background**: Hero section with ambient video
- **Icons**: Emoji icons for visual appeal
- **Color Scheme**: Warm brown tones representing trust and comfort

### Interactive Elements
- **Modal Gallery**: Click to view facility images in full size
- **Hover Effects**: Subtle animations on cards and buttons
- **Form Validation**: Real-time form feedback
- **Smooth Scrolling**: Enhanced navigation experience

## 📧 Contact Form Integration

The contact form is currently set up with a simulated submission. To make it fully functional, you can integrate with:

### Option 1: EmailJS (Recommended)
```bash
npm install @emailjs/browser
```

### Option 2: Formspree
```bash
npm install @formspree/react
```

### Option 3: Custom Backend
Create a simple Express.js server with nodemailer for email handling.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options

1. **Netlify** (Recommended)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`

2. **Vercel**
   - Import your GitHub repository
   - Automatic deployment on push

3. **GitHub Pages**
   - Add `homepage` field to package.json
   - Install `gh-pages` package
   - Run `npm run deploy`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Customization

### Colors
The main color scheme can be modified in `src/App.css`:
```css
:root {
  --primary-color: #503229;
  --secondary-color: #4F3128;
  --accent-color: #f0f0f0;
}
```

### Content
- Update text content in `src/App.js`
- Replace images in the `public/images/` directory
- Modify contact information in the contact section

### Styling
- Global styles are in `src/App.css`
- Component-specific styles are organized by section
- Responsive breakpoints are clearly defined

## 📄 License

This project is proprietary and confidential. All rights reserved by Residencial Blanes.

## 🤝 Support

For technical support or questions about the website:
- **Email**: contacto@residencialblanes.com
- **Phone**: 094 123 456
- **Address**: Blanes 1234 - Montevideo, Uruguay

## 📈 Future Enhancements

Potential improvements for future versions:
- [ ] Blog section for facility updates
- [ ] Online booking system for visits
- [ ] Virtual tour integration
- [ ] Multi-language support (English/Portuguese)
- [ ] Admin panel for content management
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Performance optimization

---

**Built with ❤️ for Residencial Blanes**
