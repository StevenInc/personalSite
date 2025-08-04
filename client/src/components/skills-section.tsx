import { motion } from "framer-motion";
import { Database, Cloud, TestTube, Wrench } from "lucide-react";

export default function SkillsSection() {
  const frontendSkills = [
    { name: "Vue.js", proficiency: 95 },
    { name: "Angular", proficiency: 90 },
    { name: "React", proficiency: 85 },
    { name: "JavaScript/TypeScript", proficiency: 95 },
  ];

  const backendSkills = [
    { name: "ColdFusion", proficiency: 98 },
    { name: "Python", proficiency: 90 },
    { name: "Java", proficiency: 85 },
    { name: "Node.js", proficiency: 88 },
  ];

  const tools = [
    { icon: Database, title: "Databases", description: "MySQL, Firebase, Supabase" },
    { icon: Cloud, title: "Cloud", description: "AWS, Vercel, Firebase" },
    { icon: TestTube, title: "Testing", description: "Playwright, Jest" },
    { icon: Wrench, title: "Dev Tools", description: "Cursor, Git, Docker" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Technical</span> Expertise
          </h2>
          <p className="text-xl text-[var(--portfolio-text-muted)] max-w-2xl mx-auto">
            Comprehensive skill set spanning frontend frameworks, backend technologies, and modern development tools
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="Abstract technology graphics with circuit patterns" 
              className="w-full aspect-square object-cover rounded-2xl shadow-xl" 
            />
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Frontend Technologies */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[var(--portfolio-accent)]">Frontend Technologies</h3>
              <div className="space-y-3">
                {frontendSkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-slate-300">{skill.name}</span>
                    <div className="flex-1 mx-4 bg-slate-700 rounded-full h-2">
                      <motion.div 
                        className="skill-bar h-2 rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm text-[var(--portfolio-text-muted)]">{skill.proficiency}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Backend Technologies */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[var(--portfolio-success)]">Backend Technologies</h3>
              <div className="space-y-3">
                {backendSkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-slate-300">{skill.name}</span>
                    <div className="flex-1 mx-4 bg-slate-700 rounded-full h-2">
                      <motion.div 
                        className="skill-bar h-2 rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm text-[var(--portfolio-text-muted)]">{skill.proficiency}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Tools & Platforms */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[var(--portfolio-warning)]">Tools & Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <motion.div 
                    key={tool.title}
                    className="bg-[var(--portfolio-darker)]/50 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <tool.icon className="text-[var(--portfolio-accent)] text-2xl mb-2" />
                    <div className="font-semibold">{tool.title}</div>
                    <div className="text-sm text-[var(--portfolio-text-muted)]">{tool.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
