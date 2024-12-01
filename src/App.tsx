import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Network,
  Wrench,
  Github,
  Linkedin,
  Mail,
  Download,
} from 'lucide-react';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="min-h-[70vh] flex items-center justify-center">
          <div className="container mx-auto px-6 pt-32 text-center">
            <div>
              <h1>Hello, I'm</h1>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Ajay Kumar!
              </motion.h1>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-gray-600 mb-8"
            >
              Web Developer | Frontend Specialist | Networking Engineer
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-kumar-m-946006287/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ajaymanohar1872@gmail.com"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-8">About Me</h2>
              <p className="text-gray-600 mb-6">
                I hold a Bachelor's degree in Computer Applications (BCA) and a Master's in Computer
                Applications (MCA). Currently, I work as a professional at Feathers Telecom Service
                Pvt Ltd. My work spans innovative web development, seamless user interfaces, and
                robust networking solutions.
              </p>
              <div className="flex justify-center items-center">
  <a
    href="src/components/AJAY KUMAR CV.pdf" // Correct the path to your file
    download="Ajay_Kumar_CV.jpg" // Provide a custom name for the downloaded file
    className="flex items-center space-x-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
  >
    <span>Download CV</span>
    <Download size={16} />
  </a>
</div>

            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white bg-opacity-80">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <SkillCard
                icon={Code}
                title="Web Development"
                skills={['HTML', 'CSS', 'JavaScript', 'React', 'Python']}
              />
              <SkillCard
                icon={Network}
                title="Networking"
                skills={['TCP/IP', 'Network Troubleshooting']}
              />
              <SkillCard
                icon={Wrench}
                title="Tools & Technologies"
                skills={['Google Sheets API', 'Git', 'VS Code']}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Interactive Form & Search Tool"
                description="A web-based application that integrates with Google Sheets for real-time data access and search functionality."
                image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                technologies={['HTML', 'JavaScript', 'Google Sheets API']}
              />
              <ProjectCard
                title="Responsive Portfolio Website"
                description="A dynamic portfolio showcasing my skills and projects with a modern design."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                technologies={['React', 'Tailwind CSS']}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white bg-opacity-80">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-6">
  <div className="container mx-auto px-6 flex flex-col items-center justify-center">
    <p className="text-sm text-center">
      © {new Date().getFullYear()} Ajay Kumar. All rights reserved.
    </p>
  </div>
</footer>

      </div>
    </div>
  );
}

export default App;
