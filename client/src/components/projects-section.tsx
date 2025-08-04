import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import mightyMugsScreenshot from "@assets/mighty-mugs-screenshot.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Real-Time Delta-Neutral Trading App",
      description: "High-speed trading application maintaining zero delta exposure within live derivatives portfolio. Features real-time API integration and sub-second trade execution.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      alt: "Financial trading dashboard with real-time data visualization",
      year: "2023",
      type: "Private",
      features: [
        "Built core financial logic in Python with live greeks computation",
        "Integrated TD Ameritrade API for real-time quotes and execution",
        "Firebase Realtime Database for sub-second synchronization"
      ],
      technologies: ["Python", "Firebase", "Trading APIs", "Real-time"],
      link: null,
      isVideo: false
    },
    {
      title: "MightMugs.com",
      description: "Full-stack e-commerce platform for custom mug design and manufacturing. Integrated dye-sublimation printing workflow with complete fulfillment system.",
      image: mightyMugsScreenshot,
      alt: "Mighty Mugs personalized photo mug e-commerce platform with 3D preview technology",
      year: "2007",
      type: "Live",
      features: [
        "Developed personalized photo mug e-commerce platform with 3D preview technology",
        "Built custom mug design interface allowing users to upload and position photos",
        "Implemented 3D animated preview system showing exact mug appearance before purchase",
        "Created complete e-commerce workflow from design to order processing and fulfillment"
      ],
      technologies: ["E-commerce", "Manufacturing", "Full-stack"],
      link: "https://photos.app.goo.gl/kiMQ2qeT8vbGrnX46",
      isVideo: false
    },
    {
      title: "LiveStorefronts.com",
      description: "Real-time inventory posting platform enabling phone-based uploads with Google Maps integration for location-based business discovery.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMijA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      alt: "Mobile app interface showing inventory management features",
      year: "2013",
      type: "Archive",
      features: [
        "Developed mobile merchant app enabling instant inventory posting with camera integration",
        "Built 'Snap, Speak & Send' functionality for rapid product listing and management",
        "Created responsive web storefronts that sync with mobile app inventory in real-time",
        "Implemented cross-platform solution supporting both Google Play and App Store deployment",
        "Designed intuitive workflow allowing merchants to publish inventory in under a minute"
      ],
      technologies: ["Mobile", "Google Maps", "Real-time"],
      link: "https://photos.app.goo.gl/EF2bBFGehtehzC9i8",
      isVideo: false
    },
    {
      title: "Air Graffiti",
      description: "Interactive digital graffiti wall using IR/motion-tracked spray cans with projection mapping technology for immersive art installations.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMijA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      alt: "Interactive digital art installation with projection mapping",
      year: "2013",
      type: "Demo",
      features: [
        "Motion tracking with IR sensors",
        "Real-time projection mapping",
        "Interactive art installation framework"
      ],
      technologies: ["Creative Tech", "Motion Tracking", "Interactive"],
      link: "https://www.youtube.com/watch?v=RSA9I3E_rE4",
      isVideo: true
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Private": return "var(--destructive)";
      case "Live": return "var(--portfolio-success)";
      case "Archive": return "var(--portfolio-warning)";
      case "Demo": return "var(--portfolio-purple)";
      default: return "var(--portfolio-accent)";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Notable</span> Projects
          </h2>
          <p className="text-xl text-[var(--portfolio-text-muted)] max-w-2xl mx-auto">
            Innovative solutions spanning fintech, e-commerce, and creative technology
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="bg-slate-800 rounded-xl p-6 shadow-xl portfolio-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between mb-4">
                <img 
                  src={project.image}
                  alt={project.alt}
                  className="w-24 h-24 object-cover rounded-lg" 
                />
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 rounded text-xs" style={{ 
                    backgroundColor: `var(--portfolio-success)20`, 
                    color: "var(--portfolio-success)" 
                  }}>
                    {project.year}
                  </span>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--portfolio-accent)] hover:text-blue-300 transition-colors"
                    >
                      {project.isVideo ? <Play className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                    </a>
                  )}
                  <span className="px-2 py-1 rounded text-xs" style={{ 
                    backgroundColor: `${getTypeColor(project.type)}20`, 
                    color: getTypeColor(project.type) 
                  }}>
                    {project.type}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              
              <div className="space-y-2 mb-4">
                {project.features.map((feature, featureIndex) => (
                  <p key={featureIndex} className="text-sm text-slate-400">• {feature}</p>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 rounded text-xs"
                    style={{ 
                      backgroundColor: `var(--portfolio-accent)20`, 
                      color: "var(--portfolio-accent)" 
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Gallery Button for MightyMugs and LiveStorefronts */}
              {(project.title === "MightMugs.com" || project.title === "LiveStorefronts.com") && project.link && (
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--portfolio-success)] text-white rounded-lg hover:bg-[var(--portfolio-success)]/80 transition-colors font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Gallery
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
