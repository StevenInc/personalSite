import { motion } from "framer-motion";
import { Mail, Globe, Phone } from "lucide-react";
import { useState } from "react";
import playskoolComputer from "@assets/playskool_computer_front_shadow_1754275521975.jpg";
import playskoolComputerBack from "@assets/playskool_computer_back2_shadow_1754275635519.jpg";
import PDFResumeGenerator from "./pdf-resume-generator";
import VCardGenerator from "./vcard-generator";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Steven</span><br />
                <span className="text-slate-50">Benjamin</span>
              </h1>
              <p className="text-xl md:text-2xl text-[var(--portfolio-text-muted)] font-medium">
                Senior Full Stack Developer
              </p>
              <p className="text-lg text-slate-300 max-w-lg">
                20+ years crafting dynamic applications with Vue.js, ColdFusion, Python, and modern web technologies. Currently building innovative solutions at Timesheets.com.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleContactClick}
                className="bg-[var(--portfolio-accent)] hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:transform hover:scale-105"
              >
                Get In Touch
              </button>
              <button
                onClick={handleProjectsClick}
                className="border border-slate-600 hover:border-[var(--portfolio-accent)] text-slate-50 px-8 py-3 rounded-lg font-semibold transition-all hover:transform hover:scale-105"
              >
                View Work
              </button>
              <PDFResumeGenerator />
              <VCardGenerator />
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:me@stevenbenjamin.com" 
                className="text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="http://www.stevenbenjamin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] transition-colors"
              >
                <Globe className="h-6 w-6" />
              </a>
              <a 
                href="tel:4153249035" 
                className="text-[var(--portfolio-text-muted)] hover:text-[var(--portfolio-accent)] transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cursor-pointer space-y-4"
          >
            <img 
              src={isHovered ? playskoolComputerBack : playskoolComputer} 
              alt={isHovered ? "Playskool computer instructions - how it all works" : "Vintage Playskool computer - where it all began"} 
              className="w-full h-auto object-contain rounded-2xl shadow-2xl transition-opacity duration-300" 
            />
            <p className="text-lg text-center text-slate-400 italic transition-opacity duration-300">
              {isHovered ? "Playskool computer instructions - how it all works" : "Vintage Playskool computer - where it all began"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
