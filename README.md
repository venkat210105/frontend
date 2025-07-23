# Venkata Karthik Sai - Portfolio Website

A modern, responsive portfolio website showcasing skills, projects, and professional experience. Built with React, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=Portfolio+Website)

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes for better user experience
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Modern UI**: Clean, professional design with shadcn/ui components
- **Interactive Navigation**: Smooth scroll navigation with active section highlighting
- **Contact Form**: Functional contact form for potential employers/clients
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app)

## 📋 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal summary with profile picture and key statistics
3. **Skills**: Categorized technical skills with interactive cards
4. **Projects**: Featured projects with descriptions and links
5. **Experience**: Professional experience timeline
6. **Education**: Academic background and certifications
7. **Contact**: Contact information and message form

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/venkat210105/portfolio.git
   cd venkat-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

### Preview Production Build

```bash
npm run preview
# or
pnpm preview
```

## 📁 Project Structure

```
venkat-portfolio/
├── public/
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── profilepic.jpg
│   ├── components/
│   │   └── ui/
│   │       ├── badge.jsx
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── input.jsx
│   │       └── textarea.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── components.json
├── package.json
├── tailwind.config.js
├── vite.config.js
├── DEPLOYMENT_GUIDE.md
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit the data in `src/App.jsx`:

```javascript
// Personal information
const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  phone: "+1-234-567-8900",
  // ... other details
}

// Skills
const skills = {
  languages: ["JavaScript", "Python", "Java"],
  // ... other skill categories
}

// Projects
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    // ... other project details
  }
]
```

### Update Profile Picture

Replace `src/assets/profilepic.jpg` with your own professional photo.

### Modify Styling

- **Colors**: Update the color palette in `src/App.css`
- **Components**: Customize shadcn/ui components in `src/components/ui/`
- **Layout**: Modify section layouts in `src/App.jsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live!

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

### Other Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Use Firebase CLI

## 📧 Contact Form Setup (Optional)

To make the contact form functional:

1. **Sign up for EmailJS** at [emailjs.com](https://www.emailjs.com/)
2. **Create a service** and get your credentials
3. **Add environment variables**:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

**Built with ❤️ by Venkata Karthik Sai**

