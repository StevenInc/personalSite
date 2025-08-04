import { motion } from "framer-motion";
import stevenPhoto from "@assets/steven_benjamin_thought_bubble_1754271517793.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[var(--portfolio-darker)]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <img 
              src={stevenPhoto} 
              alt="Steven Benjamin - Senior Full Stack Developer" 
              className="w-full h-auto object-contain rounded-2xl shadow-xl" 
            />
          </div>
          
          <motion.div 
            className="space-y-6 md:col-span-2"
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
                I am a seasoned full stack developer with <strong className="text-[var(--portfolio-accent)]">20+ years of experience</strong> delivering dynamic, data-driven applications across enterprise, e-commerce, fintech, and multimedia platforms. As a <strong className="text-[var(--portfolio-success)]">natural team builder</strong>, I excel at fostering collaboration and mentoring developers to achieve shared goals.
              </p>
              <p>
                As Senior Full Stack Developer at <strong className="text-[var(--portfolio-success)]">Timesheets.com</strong>, I led cross-functional teams in developing a VueJS-based calendar scheduling platform, <strong className="text-[var(--portfolio-accent)]">mentoring junior developers</strong> and establishing best practices that improved team productivity and code quality.
              </p>
              <p>
                My leadership experience spans founding and building end-to-end projects including <strong className="text-[var(--portfolio-accent)]">Mapified.com</strong>, <strong className="text-[var(--portfolio-accent)]">LiveStorefronts.com</strong>, and <strong className="text-[var(--portfolio-accent)]">MightMugs.com</strong>, where I successfully <strong className="text-[var(--portfolio-success)]">coordinated teams</strong> across software engineering, physical product workflows, and customer experience design.
              </p>
              <p>
                I thrive in collaborative environments, bringing people together through clear communication, knowledge sharing, and a genuine passion for helping others grow professionally. My experience includes algorithmic trading platforms and electronics automation, always with a focus on building strong, cohesive teams.
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
