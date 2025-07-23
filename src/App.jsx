import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useContactForm } from './hooks/useContactForm'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Download,
  Code,
  Database,
  Cloud,
  Brain,
  Award,
  Calendar,
  MapPin,
  User,
  Briefcase,
  GraduationCap,
  Menu,
  X,
  Sun,
  Moon,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import profilePic from './assets/profilepic.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  
  // Contact form functionality
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    submitForm,
    resetForm
  } = useContactForm()

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const result = await submitForm()
    
    if (result.success) {
      // Show success message - you could use a toast library here
      console.log('Message sent successfully!')
    } else {
      // Show error message
      console.error('Failed to send message:', result.error)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    languages: ['Java', 'JavaScript', 'Python', 'C'],
    webDevelopment: ['Node.js', 'Django', 'HTML5', 'CSS3', 'ReactJS', 'Bootstrap'],
    frameworks: ['SpringBoot', 'Express.js', 'Maven', 'Gradle', 'Jenkins', 'Vercel'],
    databases: ['MySQL', 'MongoDB', 'Amazon RDS'],
    cloudDevOps: ['AWS (EC2, S3, RDS)', 'Git', 'GitHub', 'CI/CD'],
    apis: ['REST API', 'OAuth 2.0', 'Instagram Graph API'],
    testing: ['JUnit', 'PyTest', 'Selenium'],
    ai: ['Whisper AI', 'NLP', 'CNN', 'TensorFlow']
  }

  const projects = [
    {
      title: 'Social Media Data Fetcher',
      description: 'Built a scalable media processing pipeline to fetch, classify, and manage multimedia files from social platforms. Applied NLP techniques for automated metadata extraction and leveraged AWS S3 for scalable storage, reducing manual cataloging efforts by 40%.',
      technologies: ['Node.js', 'Whisper AI', 'AWS (EC2, S3)', 'MySQL'],
      github: 'https://github.com/venkat210105/social-media-data-fetcher',
      achievements: ['40% reduction in manual cataloging', '100+ media files processed daily', 'Real-time API integration']
    },
    {
      title: 'Social To Product List',
      description: 'Developed a smart platform to transform unstructured social media content into structured Amazon-style product listings. Achieved 80% reduction in manual entry by incorporating content parsing and keyword extraction.',
      technologies: ['ReactJS', 'Node.js', 'Whisper AI', 'AWS (EC2, S3, RDS)'],
      github: 'https://github.com/venkat210105/social-to-product-list',
      website: 'https://social-to-product-list.vercel.app',
      achievements: ['80% reduction in manual entry', 'Responsive UI design', 'AWS scalability']
    },
    {
      title: 'AgriCure - Plant Disease Detection',
      description: 'Designed an AI-powered web application to identify plant diseases using a custom CNN model. Developed modular architecture with Django REST backend and ReactJS frontend.',
      technologies: ['Django', 'ReactJS', 'TensorFlow', 'MongoDB'],
      github: 'https://github.com/venkat210105/agricure-plant-disease-detection',
      website: 'https://agricure-plant-disease.vercel.app',
      achievements: ['92% accuracy with CNN model', 'AI-driven diagnosis', 'Full-stack architecture']
    }
  ]

  const experience = [
    {
      title: 'Digital Talent Incubator (DTI) Apprentice',
      company: 'DBS Bank',
      duration: 'June 2025 – Present',
      description: 'Selected for DBS\'s flagship DTI program, gaining in-depth exposure to backend and full-stack development in a cloud-native fintech environment.',
      achievements: ['Cloud-native development', 'CI/CD workflows', 'Agile methodologies']
    },
    {
      title: 'Project Trainee',
      company: 'Visakhapatnam Steel Plant (RINL)',
      duration: 'May 2024 – June 2024',
      description: 'Developed a hotel booking web app using Java Servlets and Web 2.0 technologies. Focused on full-stack development and UI/UX design.',
      achievements: ['Full-stack development', 'Java Servlets', 'UI/UX design']
    }
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold"
            >
              Venkata Karthik Sai
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium capitalize w-full text-left hover:bg-accent"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Mariserla Venkata Karthik Sai
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Aspiring Software Engineer passionate about building AI-powered digital workplace tools and scalable backend systems
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" onClick={() => scrollToSection('projects')}>
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about innovation and technology, I bring expertise in AI integration and cloud-native development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={profilePic} 
                alt="Venkata Karthik Sai" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">
                I'm an aspiring Software Engineer with proven experience in GenAI integration (Whisper AI, NLP) 
                and cloud-native development (AWS, Spring Boot). I'm eager to contribute to next-gen servicing 
                platforms through agile innovation and robust full-stack solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">9.08</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary"><Mail className="w-3 h-3 mr-1" />venkatmariserla21@gmail.com</Badge>
                <Badge variant="secondary"><Phone className="w-3 h-3 mr-1" />+91-7093358526</Badge>
                <Badge variant="secondary"><MapPin className="w-3 h-3 mr-1" />Hyderabad, India</Badge>
              </div>

              <Button className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-5 h-5 mr-2 text-primary" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2 text-primary" />
                    Web & Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.webDevelopment, ...skills.frameworks].slice(0, 6).map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cloud className="w-5 h-5 mr-2 text-primary" />
                    Cloud & DevOps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.cloudDevOps, ...skills.databases].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-primary" />
                    AI & Testing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.ai, ...skills.testing].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions showcasing AI integration, cloud architecture, and full-stack development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <Award className="w-3 h-3 mr-2 text-primary" />
                          {achievement}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.website && (
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => window.open(project.website, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building expertise through hands-on experience in fintech and industrial environments
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          <Briefcase className="w-5 h-5 mr-2 text-primary" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement) => (
                        <Badge key={achievement} variant="secondary">{achievement}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic excellence and continuous learning through professional certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Bachelor of Technology in Information Technology</h3>
                    <p className="text-muted-foreground">MLR Institute of Technology, Hyderabad</p>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="outline">CGPA: 9.08</Badge>
                      <Badge variant="outline">Expected: 2026</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Key Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Full Stack Development - RINL</span>
                      <Badge variant="secondary">2024</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">JavaScript Programming - Scaler</span>
                      <Badge variant="secondary">2024</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Python Essentials - Python Institute</span>
                      <Badge variant="secondary">2024</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Data Structures & Algorithms - NPTEL</span>
                      <Badge variant="secondary">Elite</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-accent/50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss opportunities and collaborate on innovative projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>venkatmariserla21@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91-7093358526</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span>linkedin.com/in/venkata-karthik-sai-mariserla</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button size="lg" className="flex-1">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input 
                        placeholder="First Name" 
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                      <Input 
                        placeholder="Last Name" 
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                    <Input 
                      placeholder="Email Address" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                    <Input 
                      placeholder="Subject" 
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                    <Textarea 
                      placeholder="Your Message" 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                    
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="flex items-center text-green-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="flex items-center text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Failed to send message. Please try again.
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Mariserla Venkata Karthik Sai. Built with React and deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

