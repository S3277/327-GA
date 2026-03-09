# 327 Growth Architect Landing Page

A modern, responsive landing page for 327 Growth Architect - a premium coaching business scaling platform. Built with React, TypeScript, and Tailwind CSS following modern coding standards and best practices.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Performance Optimized**: Fast loading with modern build tools
- **Accessibility**: WCAG compliant components and semantic HTML
- **Type Safety**: Full TypeScript integration with strict mode
- **Code Quality**: ESLint, Prettier, and pre-commit hooks
- **Component Architecture**: Modular, reusable React components

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   └── ui/               # Reusable UI components
├── types/
│   └── index.ts         # TypeScript interfaces
├── data/                # Static data and constants
├── App.tsx
├── main.tsx
└── index.css
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd stitch_327_growth_architect_landing_page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript check |

## 🎨 Design System

### Color Palette
- **Primary**: `#ffffff` (White)
- **Background Light**: `#f8f8f6`
- **Background Dark**: `#000000`
- **Slate Variants**: For text and borders

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, uppercase, tight tracking
- **Body**: Light to medium weights

### Components
- Consistent button styles (`btn-primary`, `btn-secondary`)
- Form inputs with focus states
- Responsive grid layouts
- Smooth animations and transitions

## 🔧 Configuration

### Tailwind CSS
Custom configuration extends default Tailwind with:
- Brand colors
- Custom border radius values
- Animation utilities
- Component classes

### TypeScript
Strict mode enabled with:
- Path mapping
- Unused variable detection
- Module resolution optimizations

### ESLint & Prettier
Configured for:
- React Hooks rules
- TypeScript support
- Consistent code formatting
- Import organization

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚦 Performance

- **Vite** for fast development and optimized builds
- **Code splitting** with React.lazy (when needed)
- **Image optimization** with proper loading strategies
- **Minimal bundle size** with tree shaking

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Clean URL structure

## 🧪 Testing

Framework ready for testing with:
- Jest configuration
- React Testing Library setup
- Component test examples

## 📦 Production Deployment

### Build
```bash
npm run build
```

### Deploy
The `dist` folder contains the production-ready files that can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3
- GitHub Pages

## 🤝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React functional components pattern
- Implement proper error boundaries
- Use semantic HTML elements

### Component Structure
- Keep components small and focused
- Use proper TypeScript interfaces
- Implement proper prop validation
- Follow naming conventions

### Git Workflow
- Use meaningful commit messages
- Create feature branches
- Run linting before commits
- Keep commits atomic

## 📄 License

This project is proprietary software for 327 Growth Architect.

## 👥 Team

Built with ❤️ by the development team following modern React and TypeScript best practices.

---

For questions or support, please contact the development team.