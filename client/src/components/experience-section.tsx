import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import timesheetsScreenshot from "@assets/timesheets-screenshot.png";
import jungleeScreenshot from "@assets/junglee-screenshot.png";
import gapScreenshot from "@assets/gap-screenshot.png";
import incapitalScreenshot from "@assets/incapital-screenshot.png";
import apartmentsScreenshot from "@assets/apartments-screenshot-new.png";
import abaScreenshot from "@assets/aba-screenshot.png";
import atomicImagingScreenshot from "@assets/atomic-imaging-screenshot.png";
import judicialCouncilScreenshot from "@assets/judicial-council-screenshot.png";
import vemmaScreenshot from "@assets/vemma-screenshot.png";
import foodWineScreenshot from "@assets/food-wine-screenshot.png";
import liveStorefrontsScreenshot from "@assets/live-storefronts-screenshot.png";
import airGraffitiScreenshot from "@assets/air-graffiti-screenshot.png";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Timesheets.com",
      period: "Jan 2017 – Present",
      description: [
        "Architected a Vue-based calendar scheduling platform with drag-and-drop UI, visual overlays, and role-based access",
        "Built reusable components in both Vue.js 2.x and Vue.js 3.x, enabling legacy migration and modular reusability",
        "Developed Playwright test suites covering API endpoints, UI flows, visual regressions, and role-specific logic",
        "Leveraged Cursor AI for test authoring, intelligent refactors, and enhanced team productivity",
        "Mentored junior developers and fostered collaborative team culture across development cycles"
      ],
      technologies: ["Vue.js", "JavaScript (ES6+)", "ColdFusion", "ColdBox", "Playwright", "Cursor AI"],
      accentColor: "var(--portfolio-accent)"
    },
    {
      title: "Senior Front-End Developer",
      company: "The Gap",
      period: "2016",
      description: [
        "Angular (v2+) development across multiple Gap Inc. brands",
        "Refactored legacy JavaScript into modular components with TypeScript & RxJS",
        "Spearheaded mobile-first and WCAG-compliant improvements across major UIs",
        "Led mentorship programs for junior developers and established collaborative code review processes",
        "Built strong cross-functional relationships between design, product, and engineering teams"
      ],
      technologies: ["Angular", "TypeScript", "RxJS", "SCSS"],
      accentColor: "var(--portfolio-success)"
    },
    {
      title: "Full Stack Developer (Team Lead)",
      company: "Judicial Council of California",
      period: "Aug 2014 – Dec 2016",
      description: [
        "Led cross-functional development team in creating an asset management portal consolidating legacy systems",
        "Built ColdFusion 11 / Oracle 11g backend using FW/1 (Framework One)",
        "Introduced and mentored team in client-side MVC, OO JavaScript, and Revealing Module Patterns",
        "Championed best practices for modularization, UX, and maintainability"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "ColdFusion 11", "Oracle 11g", "FW/1", "Subversion"],
      accentColor: "var(--portfolio-purple)"
    },
    {
      title: "Frontend Developer",
      company: "Apartments.com",
      period: "2014 (6-month contract)",
      description: [
        "Developed the original interactive map feature allowing users to browse listings by region",
        "Integrated Elasticsearch for fast geographic search and Redis for caching and performance",
        "Built dynamic overlays, heatmaps, and spatial queries in collaboration with GIS analysts",
        "Delivered mobile-responsive UI with cross-browser support for high user engagement"
      ],
      technologies: ["JavaScript", "HTML", "CSS", "Elasticsearch", "Redis", "Visual Studio"],
      accentColor: "var(--portfolio-success)"
    },
    {
      title: "Latency Reduction Specialist / Frontend Developer",
      company: "Amazon (Project Junglee)",
      period: "Jan 2013 – Dec 2014",
      description: [
        "Developed cross-domain rating widgets and email templates using JSONP and iframe strategies",
        "Worked on UI latency reduction—image sprite optimization, above-the-fold asset prioritization",
        "Migrated code from CoffeeScript to modular JavaScript",
        "Gained fluency in shell scripting for Linux/Windows and internal tools"
      ],
      technologies: ["JavaScript", "Performance", "Shell Scripting"],
      accentColor: "var(--portfolio-warning)"
    },
    {
      title: "Senior Full Stack Developer",
      company: "Vemma.com",
      period: "2010 – 2012",
      description: [
        "Development of multiple web-based ecommerce platform for sites targeted to international countries",
        "Architected and implemented a custom multi-level chart to assist new recruits",
        "Developed an in-house accounting tools",
        "Utilized ColdFusion and the Fusebox framework for modularity, reusability, and long-term code maintainability"
      ],
      technologies: ["ColdFusion", "Fusebox", "JavaScript", "HTML", "CSS", "SQL Server"],
      accentColor: "var(--portfolio-warning)"
    },
    {
      title: "Senior Full Stack Developer",
      company: "American Express Publishing (Food & Wine Magazine)",
      period: "2007 – 2009",
      description: [
        "Developed a ColdFusion driven app to convert existing recipes to recipeML",
        "Worked with the web dev on their new site design",
        "Led the completion of an online wine pairing tool to match wines to existing recipes",
        "It also allowed users to upload recipes and match suggested wines using ColdFusion. There were two versions, one built with ExtJS and another with native Javascript",
        "Utilized ColdFusion and the Fusebox framework for modularity, reusability, and long-term code maintainability"
      ],
      technologies: ["ColdFusion", "Fusebox", "ExtJS", "JavaScript", "HTML", "CSS", "SQL Server"],
      accentColor: "var(--portfolio-success)"
    },
    {
      title: "Full Stack Developer",
      company: "Incapital Holdings (now Insperex)",
      period: "2003 – 2007",
      description: [
        "Led development of web-based financial tools for institutional bond traders",
        "Architected custom online bond laddering calculator for investment advisors",
        "Developed Black-Scholes based reissue valuation engine for structured products",
        "Collaborated with financial analysts to convert pricing models into performant web workflows"
      ],
      technologies: ["ColdFusion", "Fusebox", "Financial Modeling", "Black-Scholes"],
      accentColor: "var(--portfolio-purple)"
    },
    {
      title: "Full Stack Developer",
      company: "American Bar Association",
      period: "2003 (6-month contract)",
      description: [
        "Developed and maintained internal web applications for departments including membership, continuing legal education, and legal ethics",
        "Created secure ColdFusion-powered portals for attorney registration, CLE tracking, and document submission",
        "Designed intuitive UI flows to simplify staff workflows while ensuring compliance with legal data standards",
        "Collaborated across teams to build database-driven dashboards and reporting tools",
        "Maintained and extended legacy CFML code while improving system performance and usability"
      ],
      technologies: ["ColdFusion", "HTML", "CSS", "JavaScript", "SQL Server", "IIS", "Legacy CFML"],
      accentColor: "var(--portfolio-warning)"
    },
    {
      title: "Web Developer / Kiosk Developer",
      company: "Atomic Imaging",
      period: "2001 – 2003",
      description: [
        "Developed interactive kiosks using Macromedia Director for trade shows and corporate lobbies",
        "Built ColdFusion and Flash-powered websites for high-profile clients",
        "Delivered live streaming and video media integrations for multimedia campaigns",
        "Created engaging multimedia experiences that enhanced client brand presence"
      ],
      technologies: ["ColdFusion", "Director", "HTML", "CSS", "JavaScript", "SQL Server", "IIS"],
      accentColor: "var(--portfolio-purple)"
    },
    {
      title: "Mobile App Developer / Web Developer",
      company: "Live Storefronts",
      period: "2012 – 2014",
      description: [
        "Developed mobile merchant app enabling instant inventory posting with camera integration",
        "Built 'Snap, Speak & Send' functionality for rapid product listing and management",
        "Created responsive web storefronts that sync with mobile app inventory in real-time",
        "Implemented cross-platform solution supporting both Google Play and App Store deployment",
        "Designed intuitive workflow allowing merchants to publish inventory in under a minute"
      ],
      technologies: ["Mobile Development", "JavaScript", "HTML5", "CSS3", "Camera API", "Real-time Sync"],
      accentColor: "var(--portfolio-success)"
    },
    {
      title: "Mobile App Developer",
      company: "Air Graffiti",
      period: "2009 – 2010",
      description: [
        "Developed innovative mobile graffiti application with dual-mode functionality",
        "Built 'Painter' mode enabling users to create digital graffiti art using touch interface",
        "Implemented 'Viewer' mode for discovering and exploring graffiti artwork by location",
        "Created location-based art sharing platform connecting street artists digitally",
        "Designed intuitive mobile UI optimized for creative expression and social discovery"
      ],
      technologies: ["Mobile Development", "iOS", "Location Services", "Touch Interface", "Social Platform"],
      accentColor: "var(--portfolio-purple)"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[var(--portfolio-darker)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Professional</span> Experience
          </h2>
          <p className="text-xl text-[var(--portfolio-text-muted)] max-w-2xl mx-auto">
            Two decades of delivering innovative solutions across diverse industries and platforms
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div 
                key={`${experience.company}-${index}`}
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all portfolio-card">
                  {/* Special layout for companies with images */}
                  {(experience.company === "Timesheets.com" || experience.company === "Amazon (Project Junglee)" || experience.company === "The Gap" || experience.company === "Incapital Holdings (now Insperex)" || experience.company === "Apartments.com" || experience.company === "American Bar Association" || experience.company === "Atomic Imaging" || experience.company === "Judicial Council of California" || experience.company === "Vemma.com" || experience.company === "American Express Publishing (Food & Wine Magazine)" || experience.company === "Live Storefronts" || experience.company === "Air Graffiti") ? (
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Image on the left */}
                      <div className="lg:w-1/3 flex-shrink-0">
                        <img 
                          src={experience.company === "Timesheets.com" ? timesheetsScreenshot : 
                               experience.company === "Amazon (Project Junglee)" ? jungleeScreenshot : 
                               experience.company === "The Gap" ? gapScreenshot :
                               experience.company === "Incapital Holdings (now Insperex)" ? incapitalScreenshot :
                               experience.company === "Apartments.com" ? apartmentsScreenshot :
                               experience.company === "American Bar Association" ? abaScreenshot :
                               experience.company === "Judicial Council of California" ? judicialCouncilScreenshot :
                               experience.company === "Vemma.com" ? vemmaScreenshot :
                               experience.company === "American Express Publishing (Food & Wine Magazine)" ? foodWineScreenshot :
                               experience.company === "Live Storefronts" ? liveStorefrontsScreenshot :
                               experience.company === "Air Graffiti" ? airGraffitiScreenshot :
                               atomicImagingScreenshot}
                          alt={experience.company === "Timesheets.com" ? 
                            "Timesheets.com scheduling interface showing calendar view" : 
                            experience.company === "Amazon (Project Junglee)" ?
                            "Junglee.com e-commerce platform interface" :
                            experience.company === "The Gap" ?
                            "Gap Inc. website showing diverse fashion models" :
                            experience.company === "Incapital Holdings (now Insperex)" ?
                            "Incapital LadderBuilder financial tool interface for bond portfolio creation" :
                            experience.company === "Apartments.com" ?
                            "Apartments.com rental search interface with interactive map feature" :
                            experience.company === "American Bar Association" ?
                            "American Bar Association website showing legal professional advocacy" :
                            experience.company === "Judicial Council of California" ?
                            "California Judicial Council website showing policy and administration interface" :
                            experience.company === "Vemma.com" ?
                            "Vemma e-commerce platform featuring health products and international marketing" :
                            experience.company === "American Express Publishing (Food & Wine Magazine)" ?
                            "Food & Wine Magazine website showing holiday recipes, cooking guides, and wine pairings" :
                            experience.company === "Live Storefronts" ?
                            "Live Storefronts mobile merchant app with Snap, Speak & Send inventory management system" :
                            experience.company === "Air Graffiti" ?
                            "Air Graffiti mobile app showing Painter and Viewer modes for digital street art creation" :
                            "Atomic Imaging Halloween-themed interactive website with multimedia content"}
                          className={`w-full h-auto rounded-lg border border-slate-600 object-contain experience-image ${experience.company === "Timesheets.com" ? "current-position" : ""}`}
                        />
                      </div>
                      
                      {/* Content on the right */}
                      <div className="lg:w-2/3">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-[var(--portfolio-accent)]">{experience.title}</h3>
                            <p className="text-lg font-semibold" style={{ color: experience.accentColor }}>{experience.company}</p>
                          </div>
                          <div className="text-[var(--portfolio-text-muted)] flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {experience.period}
                          </div>
                        </div>
                        <div className="space-y-3 text-slate-300">
                          {experience.description.map((point, pointIndex) => (
                            <p key={pointIndex}>• {point}</p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {experience.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 rounded-full text-sm"
                              style={{ 
                                backgroundColor: `${experience.accentColor}20`, 
                                color: experience.accentColor 
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Standard layout for other experiences
                    <>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-[var(--portfolio-accent)]">{experience.title}</h3>
                          <p className="text-lg font-semibold" style={{ color: experience.accentColor }}>{experience.company}</p>
                        </div>
                        <div className="text-[var(--portfolio-text-muted)] flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {experience.period}
                        </div>
                      </div>
                      <div className="space-y-3 text-slate-300">
                        {experience.description.map((point, pointIndex) => (
                          <p key={pointIndex}>• {point}</p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 rounded-full text-sm"
                            style={{ 
                              backgroundColor: `${experience.accentColor}20`, 
                              color: experience.accentColor 
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
