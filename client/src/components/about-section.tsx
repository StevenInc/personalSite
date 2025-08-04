import { motion } from "framer-motion";
import stevenPhoto from "@assets/Screenshot 2025-08-03 at 6.29.01 PM_1754270971704.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[var(--portfolio-darker)]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src={stevenPhoto} 
              alt="Steven Benjamin - Senior Full Stack Developer" 
              className="w-full aspect-square object-cover rounded-2xl shadow-xl" 
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">
              <span className="gradient-text">About</span> Steven
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I am a seasoned full stack developer with <strong className="text-[var(--portfolio-accent)]">20+ years of experience</strong> delivering dynamic, data-driven applications across enterprise, e-commerce, fintech, and multimedia platforms.
              </p>
              <p>
                As Senior Full Stack Developer at <strong className="text-[var(--portfolio-success)]">Timesheets.com</strong>, I led the development of a VueJS-based calendar scheduling platform using Vue.js 2.x & 3.x, supported by comprehensive Playwright test suites and Cursor AI–assisted workflows.
              </p>
              <p>
                I've founded and built end-to-end projects including <strong className="text-[var(--portfolio-accent)]">Mapified.com</strong>, <strong className="text-[var(--portfolio-accent)]">LiveStorefronts.com</strong>, and <strong className="text-[var(--portfolio-accent)]">MightMugs.com</strong>, blending software engineering, physical product workflows, and intuitive design.
              </p>
              <p>
                Additionally, I have experience developing algorithmic trading platforms and have a strong background in electronics, automation, and fabrication with 10 years of thermoforming machinery experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">20+</div>
                <div className="text-sm text-[var(--portfolio-text-muted)]">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-[var(--portfolio-text-muted)]">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
