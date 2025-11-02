# Srinu Duggempudi - Portfolio Website

A modern, responsive portfolio website built with **React**, **TypeScript**, and **Vite**. Features include dark/light mode toggle, smooth animations, and a clean professional design with blue accent colors.

## 🚀 Features

- ✨ **Dark/Light Mode Toggle** - Automatic theme switching with localStorage persistence
- 🎨 **Professional Blue Design** - Modern UI with professional color scheme
- ⚡ **Smooth Animations** - Fade-in, slide, and scale animations throughout
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⚙️ **TypeScript Support** - Type-safe components and data structures
- 🔄 **Hot Module Replacement** - Fast development with Vite
- 📊 **Project Showcase** - Expandable project cards with detailed information
- 🎯 **Skills Section** - Organized by category with hover effects
- 📧 **Contact Form** - Email integration ready
- 🎭 **Sticky Header** - Always accessible navigation

## 📂 Project Structure

```
portfolio-site/
├── src/
│   ├── components/           # React components
│   │   ├── Header.tsx        # Navigation header with theme toggle
│   │   ├── Hero.tsx          # Landing section
│   │   ├── About.tsx         # About and experience
│   │   ├── Projects.tsx      # Project showcase
│   │   ├── Skills.tsx        # Technical skills
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Footer.tsx        # Footer
│   │   └── *.module.css      # Component styles
│   ├── context/
│   │   └── ThemeContext.tsx  # Dark/light mode context
│   ├── data/
│   │   └── portfolio.ts      # Portfolio data (projects, skills, experience)
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   ├── styles/
│   │   └── globals.css       # Global styles and animations
│   ├── App.tsx               # Main App component
│   ├── main.tsx              # Entry point
│   └── index.css             # Base CSS
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Steps

1. **Navigate to the project directory:**
```bash
cd portfolio-site
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

The site will be available at `http://localhost:5174`

## 📝 Customization

### Update Portfolio Data

Edit `src/data/portfolio.ts` to update:
- **Projects**: Modify the `projects` array with your project details
- **Skills**: Update the `skills` array to organize technologies by category
- **Experience**: Add/edit work experience in the `experience` array

### Change Colors

Edit `src/styles/globals.css` to modify the color scheme:

```css
:root {
  /* Light theme */
  --color-primary: #0066cc;
  --color-accent: #ff6b35;
  --color-bg: #ffffff;
  /* ... more colors */
}

[data-theme='dark'] {
  /* Dark theme colors */
  --color-primary: #4da6ff;
  /* ... more colors */
}
```

### Customize Contact Information

Update in `src/components/Hero.tsx` and `src/components/Contact.tsx`:
- Phone number
- Email address
- Location
- Social links (if adding)

### Modify Hero Content

Edit `src/components/Hero.tsx` to change:
- Title and subtitle
- Description
- Call-to-action buttons
- Floating tech tags

## 🎨 Styling

The portfolio uses **CSS Modules** for component styling with:
- CSS custom properties (variables) for theming
- Smooth transitions and animations
- Mobile-first responsive design
- Backdrop filters and modern effects

### Key Animation Classes
- `.fade-in` - Fade in animation
- `.slide-in-left` - Slide from left
- `.slide-in-right` - Slide from right
- `.scale-in` - Scale up animation

## 🚀 Building for Production

### Build the site:
```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview production build:
```bash
npm run preview
```

## 📦 Deployment Options

### 1. **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### 2. **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### 3. **GitHub Pages**
1. Add to `vite.config.ts`:
```typescript
export default {
  base: '/portfolio-site/',
  // ... rest of config
}
```

2. Push to GitHub and enable Pages in repository settings

### 4. **Traditional Hosting**
1. Run `npm run build`
2. Upload `dist/` folder to your hosting provider
3. Configure server to serve `index.html` for all routes (SPA)

## 🔧 Development Scripts

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on buttons
- Keyboard navigation support
- Color contrast compliance
- Focus visible indicators

## 📄 SEO Considerations

To improve SEO, add to `index.html`:
```html
<meta name="description" content="Srinu Duggempudi - Full Stack Developer with 5+ years of experience">
<meta name="keywords" content="React, Django, Python, Full Stack Developer">
<meta name="author" content="Srinu Duggempudi">
<meta name="og:title" content="Srinu Duggempudi - Portfolio">
<meta name="og:description" content="Full Stack Developer - React.js & Python Expert">
```

## 🎯 Next Steps

1. **Add more projects** to the projects array
2. **Update skills** with your latest technologies
3. **Customize colors** to match your brand
4. **Add social links** (GitHub, LinkedIn, Twitter)
5. **Deploy** to a hosting platform
6. **Set up analytics** (Google Analytics, Plausible, etc.)

## 📞 Contact

- Email: srinuduggempudi26@gmail.com
- Phone: +91 9391339072
- Location: Hyderabad, India

## 📄 License

This portfolio is open source and available for personal use.

---

**Built with ❤️ using React + TypeScript + Vite**