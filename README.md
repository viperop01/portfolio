# 🚀 Agam Hora - Full Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, React 18, and Tailwind CSS. This professional portfolio showcases my skills, projects, and achievements with a sleek dark theme and gradient design.

## ✨ Features

### 🎨 **Modern Design System**
- **Dark Theme** with professional blue-purple gradient accents
- **Responsive Design** that works perfectly on all devices
- **Smooth Animations** and hover effects
- **Professional Typography** using Geist fonts
- **Consistent Color Palette** with proper contrast ratios

### 📱 **Pages & Sections**
- **🏠 Home** - Hero section with gradient background and call-to-action buttons
- **👤 About** - Professional profile with statistics, journey, and skills showcase
- **💼 Projects** - Featured projects with technology tags and action buttons
- **🏆 Achievements** - Professional milestones, awards, and certifications
- **📞 Contact** - Professional contact form with social media links

### 🛠️ **Technical Features**
- **Next.js 15** with App Router for optimal performance
- **React 18** with TypeScript for type safety
- **Tailwind CSS v3** for utility-first styling
- **Lucide React** for beautiful icons
- **Responsive Navigation** with mobile hamburger menu
- **SEO Optimized** with proper meta tags

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4.0
- **Icons**: Lucide React
- **UI Components**: Custom components with shadcn/ui patterns
- **Deployment**: Netlify (ready for deployment)

## 📦 Dependencies

### Core Dependencies
```json
{
  "next": "15.5.4",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5"
}
```

### UI & Styling
```json
{
  "tailwindcss": "^3.4.0",
  "lucide-react": "^0.263.1",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0"
}
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/viperop01/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── about/page.tsx          # About page with stats and skills
│   │   ├── achievements/page.tsx   # Achievements and milestones
│   │   ├── contact/page.tsx       # Contact form and information
│   │   ├── projects/page.tsx       # Featured projects showcase
│   │   ├── globals.css             # Global styles and CSS variables
│   │   ├── layout.tsx             # Root layout component
│   │   └── page.tsx               # Home page
│   ├── components/
│   │   ├── HeroSection.tsx        # Hero section component
│   │   ├── NavBar.tsx             # Navigation component
│   │   └── ui/
│   │       └── button.tsx         # Reusable button component
│   └── lib/
│       └── utils.ts               # Utility functions
├── public/                        # Static assets
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
└── package.json                  # Project dependencies
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#3B82F6 to #8B5CF6)
- **Background**: Dark theme (#0F172A)
- **Text**: High contrast white (#FFFFFF)
- **Cards**: Subtle dark cards with borders

### Typography
- **Font Family**: Geist Sans (modern, clean)
- **Headings**: Bold, large sizes for impact
- **Body**: Readable, comfortable line height

### Components
- **Buttons**: Gradient primary, outline variants
- **Cards**: Rounded corners, subtle shadows
- **Navigation**: Fixed header with backdrop blur
- **Forms**: Clean inputs with focus states

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy automatically on push to main branch

### Vercel
1. Import project from GitHub
2. Deploy with zero configuration
3. Automatic deployments on push

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Perfect layout for tablet screens
- **Desktop**: Full desktop experience with hover effects
- **Breakpoints**: sm, md, lg, xl for all screen sizes

## 🔧 Customization

### Personal Information
Update the following files with your information:
- `src/app/layout.tsx` - Site title and description
- `src/app/contact/page.tsx` - Contact information
- `src/components/HeroSection.tsx` - Hero content

### Projects
Add your projects in `src/app/projects/page.tsx`:
```typescript
const projects: Project[] = [
  {
    title: "Your Project",
    description: "Project description",
    tags: ["React", "TypeScript"],
    liveLink: "https://your-project.com",
    codeLink: "https://github.com/your-username/project",
    featured: true,
  },
];
```

### Skills & Achievements
Update skills and achievements in:
- `src/app/about/page.tsx` - Skills and experience
- `src/app/achievements/page.tsx` - Awards and milestones

## 🎯 Performance Features

- **Next.js 15**: Latest framework with App Router
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting for better performance
- **SEO**: Built-in SEO optimization
- **Fast Loading**: Optimized bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/viperop01/portfolio/issues).

## 📞 Contact

**Agam Hora** - Full Stack Developer
- **Email**: [agamhora481@gmail.com](mailto:agamhora481@gmail.com)
- **GitHub**: [@viperop01](https://github.com/viperop01)
- **Portfolio**: [Live Demo](https://your-portfolio.netlify.app)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon set
- **Vercel** for the deployment platform

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Agam Hora](https://github.com/viperop01)