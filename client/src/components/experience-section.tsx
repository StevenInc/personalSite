import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

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
      technologies: ["Vue.js", "ColdFusion", "Playwright", "Cursor AI"],
      accentColor: "var(--portfolio-accent)"
    },
    {
      title: "Senior Front-End Developer",
      company: "The Gap",
      period: "Mar 2017 – Apr 2019",
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
      title: "Developer", // Please provide your exact title
      company: "Atomic Imaging",
      period: "YYYY – YYYY", // Please provide the dates
      description: [
        // Please provide your key responsibilities and achievements at Atomic Imaging
        "Developed and maintained imaging software applications",
        "Collaborated with cross-functional teams on technical solutions",
        "Built strong client relationships and delivered quality results"
      ],
      technologies: ["Technology1", "Technology2"], // Please provide the technologies you used
      accentColor: "var(--portfolio-accent)"
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
      company: "Incapital Holdings (now Insperex)",
      period: "2003 – 2007",
      description: [
        "Led development of web-based financial tools for institutional bond traders",
        "Architected custom online bond laddering calculator for investment advisors",
        "Developed Black-Scholes based reissue valuation engine for structured products",
        "Collaborated with financial analysts to convert pricing models into performant web workflows"
      ],
      technologies: ["ColdFusion", "Financial Modeling", "Black-Scholes"],
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
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--portfolio-accent)]"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div 
                key={`${experience.company}-${index}`}
                className="relative pl-20 timeline-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all portfolio-card">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
