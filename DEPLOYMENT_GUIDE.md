# Portfolio Website Deployment Guide

## Overview
This is a professional portfolio website built with React, Tailwind CSS, and Framer Motion. It showcases your skills, projects, experience, and education in a modern, responsive design.

## Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle
- ✅ Smooth scroll navigation
- ✅ Animated sections with Framer Motion
- ✅ Professional contact form
- ✅ Skills categorization with interactive cards
- ✅ Project showcase with GitHub links
- ✅ Experience timeline
- ✅ Education and certifications section
- ✅ SEO optimized

## Deployment to Vercel

### Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to your project directory:**
   ```bash
   cd venkat-portfolio
   ```

3. **Login to Vercel:**
   ```bash
   vercel login
   ```

4. **Deploy the project:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? → Yes
   - Which scope? → Select your account
   - Link to existing project? → No
   - Project name → venkat-portfolio (or your preferred name)
   - Directory → ./
   - Override settings? → No

5. **Your site will be deployed and you'll get a URL like:**
   ```
   https://venkat-portfolio-xyz.vercel.app
   ```

### Method 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/venkat-portfolio.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com) and sign in**

3. **Click "New Project"**

4. **Import your GitHub repository**

5. **Configure project settings:**
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. **Click "Deploy"**

## Environment Variables (Optional)
If you want to add contact form functionality, you can set up environment variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Custom Domain (Optional)
1. Go to your project dashboard on Vercel
2. Click on "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Performance Optimization
The website is already optimized with:
- Code splitting
- Image optimization
- CSS minification
- Tree shaking
- Gzip compression

## SEO Configuration
Update the following files for better SEO:
- `index.html` - Meta tags and title
- Add `robots.txt` in the public folder
- Add `sitemap.xml` in the public folder

## Maintenance
- Update your resume data in the `App.jsx` file
- Add new projects by updating the projects array
- Modify skills by updating the skills object
- Update contact information as needed

## Support
If you encounter any issues:
1. Check the Vercel deployment logs
2. Ensure all dependencies are properly installed
3. Verify the build process works locally with `npm run build`
4. Check for any console errors in the browser

## Project Structure
```
venkat-portfolio/
├── public/
├── src/
│   ├── assets/
│   │   └── profilepic.jpg
│   ├── components/
│   │   └── ui/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── DEPLOYMENT_GUIDE.md
```

## Technologies Used
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- shadcn/ui Components

Your portfolio is now ready for deployment! 🚀

