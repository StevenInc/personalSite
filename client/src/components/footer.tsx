import { Mail, Globe, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--portfolio-dark)] border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4">Steven Benjamin</div>
          <p className="text-[var(--portfolio-text-muted)] mb-6">Senior Full Stack Developer • 20+ Years Experience</p>
          
          <div className="flex justify-center space-x-6 mb-8">
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
          
          <div className="text-sm text-[var(--portfolio-text-muted)]">
            © 2024 Steven Benjamin. Built with modern web technologies.
          </div>
        </div>
      </div>
    </footer>
  );
}
