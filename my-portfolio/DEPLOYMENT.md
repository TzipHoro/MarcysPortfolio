# Marcy's Portfolio

A modern, professional portfolio built with **Next.js**, **React 19**, **TypeScript**, and **Tailwind CSS**. Fully optimized for deployment on **Vercel**.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with dark mode support
- **Responsive**: Mobile-first responsive design that looks great on all devices
- **Fast Performance**: Optimized with Next.js 16 for lightning-fast load times
- **SEO Friendly**: Built-in metadata and OpenGraph support
- **TypeScript**: Full type safety for better code quality
- **Tailwind CSS**: Beautiful styling with Tailwind CSS v4
- **Dark Mode**: Automatic dark mode support with system preference detection

## 📋 Sections Included

1. **Navigation Bar** - Sticky navigation with smooth scrolling
2. **Hero Section** - Eye-catching introduction with CTAs
3. **About Section** - Professional background and skills showcase
4. **Projects Section** - Featured portfolio projects
5. **Contact Section** - Multiple ways to get in touch
6. **Footer** - Copyright and branding

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.9
- **React**: 19.2.4
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel
- **Linting**: ESLint 9

## 📦 Getting Started

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)
- Git for version control

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## 📝 Customization

### Update Your Information

1. **Edit the metadata** in `app/layout.tsx`:
   - Change the portfolio title and description
   - Update the OpenGraph image URL
   - Add your social links

2. **Update the homepage** in `app/page.tsx`:
   - Replace placeholder projects with your own
   - Update skills and technologies
   - Add your social media links
   - Customize colors and styling

3. **Modify styles** in `app/globals.css`:
   - Adjust color scheme
   - Customize typography
   - Add custom CSS as needed

### Adding Pages

Create new routes by adding files to the `app/` directory:

```typescript
// app/blog/page.tsx
export default function BlogPage() {
  return <div>Blog content here</div>;
}
```

## 🚀 Deployment on Vercel

### Option 1: Using Vercel CLI (Recommended for Local Deployment)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your deployment

### Option 2: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/your-portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` will automatically deploy to production
   - Pull requests get automatic preview deployments

### Environment Variables

If needed, add environment variables in Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables (they'll be available as `process.env.VARIABLE_NAME`)

Example `.env.local` (for local development):
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design approach
- Optimized touch targets (min 48px)
- Adaptive layouts for all screen sizes
- Fast load times on mobile networks

## 🎨 Dark Mode

Dark mode is automatically enabled based on system preferences but can be overridden in the HTML tag in `app/layout.tsx`.

## 🔍 SEO Optimization

The portfolio includes:
- Semantic HTML
- Meta tags for search engines
- OpenGraph tags for social sharing
- Structured data support
- Fast performance (Core Web Vitals optimized)

## 📊 Performance

Built with performance in mind:
- Static generation for fast page loads
- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- TypeScript for catch errors at build time

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build Issues
```bash
# Clear build cache and rebuild
rm -rf .next
npm run build
```

### Dependency Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions:
1. Check the [Next.js docs](https://nextjs.org/docs)
2. Review [Vercel's deployment docs](https://vercel.com/docs)
3. Check the project's GitHub issues

---

**Ready to deploy?** Your portfolio is production-ready! Follow the deployment steps above to get your site live on Vercel. 🎉

