# Vini's Kitchen Website

A modern, mobile-responsive one-page website for a home cooking food business specializing in Indian cuisine.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing
- **Smooth Navigation**: Fixed navbar with smooth scrolling to different sections
- **Hero Section**: Eye-catching hero with background image and overlaid text
- **About Me**: Section showcasing the chef with image and description
- **Dynamic Menu**: 
  - Organized into subsections (Snacks, Mains, Breads, Desserts)
  - Reusable React MenuItem components
  - Support for "Out of Stock" items
  - Support for "Coming Soon" items with available dates
  - Optional images for menu items
- **WhatsApp Integration**: Section with QR code placeholder and direct link to join WhatsApp group
- **Reviews Section**: Display of customer reviews and Google Maps integration

## Tech Stack

- **React** 18.3.1
- **TypeScript** 5.9.3
- **Vite** 7.2.4
- **CSS3** with mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd vinitas-kitchen-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### Adding/Editing Menu Items

Menu items are defined in `src/components/Menu.tsx`. To add or edit items:

```typescript
{
  title: 'Dish Name',
  description: 'Dish description',
  price: 100,
  status: 'available', // or 'out-of-stock' or 'coming-soon'
  availableDate: 'Jan 1, 2026', // Only for coming-soon items
  image: '/path/to/image.jpg' // Optional
}
```

### Updating Images

1. **Hero Background**: Replace the gradient in `src/components/Hero.css`:
```css
.hero-image-placeholder {
  background-image: url('path-to-your-image.jpg');
}
```

2. **Chef Photo**: Replace the gradient in `src/components/AboutMe.css`:
```css
.chef-image-placeholder {
  background-image: url('path-to-chef-image.jpg');
}
```

3. **Menu Item Images**: Add the `image` property to menu items with the path to your images.

### WhatsApp Integration

Update the WhatsApp link in `src/components/WhatsAppSection.tsx`:
```typescript
href="https://wa.me/your-whatsapp-number"
```

Replace `your-whatsapp-number` with your actual WhatsApp number (including country code, no + or spaces).

For the QR code, replace the placeholder div with an actual QR code image:
```typescript
<img src="/path/to/qr-code.png" alt="WhatsApp QR Code" />
```

### Google Reviews Integration

Update the Google Maps link in `src/components/Reviews.tsx`:
```typescript
href="https://www.google.com/maps/place/your-business-name"
```

### Customizing Colors

Colors are defined as CSS variables in `src/style.css`:

```css
:root {
  --primary-color: #d35400;     /* Main brand color */
  --secondary-color: #e67e22;   /* Secondary accent */
  --dark-color: #2c3e50;        /* Dark text/backgrounds */
  --light-color: #ecf0f1;       /* Light backgrounds */
  --text-color: #333;           /* Body text */
  --accent-color: #27ae60;      /* Success/accent */
  --error-color: #e74c3c;       /* Errors/warnings */
}
```

### About Me Content

Edit the text in `src/components/AboutMe.tsx` to replace the Lorem Ipsum placeholder with actual chef information.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed navigation bar
│   ├── Navbar.css
│   ├── Hero.tsx            # Hero section with image overlay
│   ├── Hero.css
│   ├── AboutMe.tsx         # About the chef section
│   ├── AboutMe.css
│   ├── MenuItem.tsx        # Reusable menu item component
│   ├── MenuItem.css
│   ├── Menu.tsx            # Main menu section
│   ├── Menu.css
│   ├── WhatsAppSection.tsx # WhatsApp group section
│   ├── WhatsAppSection.css
│   ├── Reviews.tsx         # Customer reviews section
│   └── Reviews.css
├── App.tsx                 # Main app component
├── App.css
├── main.tsx               # Application entry point
└── style.css              # Global styles and variables
```

## Mobile Compatibility

The website is built with a mobile-first approach and includes responsive breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and optimized for touch interactions on mobile devices.

## License

© 2025 Vini's Kitchen. All rights reserved.
