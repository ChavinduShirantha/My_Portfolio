# Portfolio Website V2

A modern, responsive portfolio website built with React and Vite.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design
- **Fast Performance** - Optimized for speed
- **SEO Friendly** - Optimized for search engines
- **Accessibility** - WCAG compliant
- **Dark/Light Mode** - Theme switching capability

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: CSS3, CSS Variables
- **Build Tool**: Vite
- **Icons**: Font Awesome
- **Animations**: CSS Transitions & Animations
- **Form Handling**: Web3Forms integration

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx/css   # About section
│   ├── Contact.jsx/css # Contact form
│   ├── Education.jsx/css # Education timeline
│   ├── Experience.jsx/css # Work experience
│   ├── Footer.jsx/css  # Footer component
│   ├── Header.jsx/css  # Navigation header
│   ├── Hero.jsx/css    # Hero section
│   ├── Projects.jsx/css # Portfolio projects
│   ├── Services.jsx/css # Services offered
│   └── Stats.jsx/css   # Statistics counter
├── assets/             # Static assets
│   └── images/         # Image assets
│       ├── profile/    # Profile photos
│       ├── projects/   # Project screenshots
│       ├── icons/      # Custom icons
│       ├── backgrounds/ # Background images
│       ├── testimonials/ # Client photos
│       └── logos/      # Brand logos
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── constants/          # App constants
├── styles/             # Global styles
└── main.jsx           # App entry point
```

## 🎨 Customization

### Personal Information
Update your personal details in:
- `src/utils/constants.js` - Contact info and social links
- Component files - Replace placeholder text

### Images
Add your images to:
- `src/assets/images/profile/` - Profile photos
- `src/assets/images/projects/` - Project screenshots
- `public/images/` - Static images

### Colors & Styling
Customize the design in:
- `src/styles/globals.css` - CSS variables and global styles
- Individual component CSS files

### Content
Update content in respective component files:
- Hero section: `src/components/Hero.jsx`
- About section: `src/components/About.jsx`
- Services: `src/components/Services.jsx`
- Projects: `src/components/Projects.jsx`

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📧 Contact Form Setup

1. Sign up at [Web3Forms](https://web3forms.com)
2. Get your access key
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/components/Contact.jsx`

## 🎯 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

---

**Made with ❤️ by Your Name**