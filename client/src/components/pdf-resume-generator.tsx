import { jsPDF } from 'jspdf';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function PDFResumeGenerator() {
  const generateResumePDF = () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    let y = margin;

    // Helper function to add text with proper spacing
    const addText = (text: string, x: number, yPos: number, fontSize = 10, style: 'normal' | 'bold' = 'normal') => {
      pdf.setFontSize(fontSize);
      pdf.setFont('helvetica', style);
      pdf.text(text, x, yPos);
      return yPos + (fontSize * 0.35);
    };

    // Helper function to add wrapped text
    const addWrappedText = (text: string, x: number, yPos: number, maxWidth: number, fontSize = 10) => {
      pdf.setFontSize(fontSize);
      pdf.setFont('helvetica', 'normal');
      const lines = pdf.splitTextToSize(text, maxWidth);
      pdf.text(lines, x, yPos);
      return yPos + (lines.length * fontSize * 0.35);
    };

    // Header
    y = addText('STEVEN BENJAMIN', margin, y, 20, 'bold');
    y = addText('Senior Full Stack Developer', margin, y + 2, 14);
    y = addText('20+ years of full-stack development experience', margin, y + 2, 11);
    y += 10;

    // Contact Information
    y = addText('CONTACT', margin, y, 12, 'bold');
    y = addText('Email: me@stevenbenjamin.com', margin, y + 3, 10);
    y = addText('Website: stevenbenjamin.com', margin, y + 2, 10);
    y += 10;

    // Professional Summary
    y = addText('PROFESSIONAL SUMMARY', margin, y, 12, 'bold');
    const summary = 'Seasoned full stack developer with 20+ years of experience delivering dynamic, data-driven applications across enterprise, e-commerce, fintech, and multimedia platforms. Natural team builder who excels at fostering collaboration and mentoring developers. Currently Senior Full Stack Developer at Timesheets.com, leading cross-functional teams in developing VueJS-based calendar scheduling platforms.';
    y = addWrappedText(summary, margin, y + 3, pageWidth - (margin * 2), 10) + 8;

    // Technical Skills
    y = addText('TECHNICAL SKILLS', margin, y, 12, 'bold');
    y = addText('Frontend:', margin, y + 3, 10, 'bold');
    y = addText('Vue.js (Expert), Angular (Advanced), React (Proficient), JavaScript/TypeScript (Expert)', margin + 60, y - 3, 10);
    y = addText('Backend:', margin, y + 2, 10, 'bold');
    y = addText('ColdFusion (Expert), Python (Advanced), Java (Proficient), Node.js (Advanced)', margin + 60, y - 3, 10);
    y = addText('Tools & Platforms:', margin, y + 2, 10, 'bold');
    y = addText('MySQL, Firebase, Supabase, AWS, Vercel, Playwright, Jest, Cursor, Git, Docker', margin + 60, y - 3, 10);
    y += 8;

    // Work Experience
    y = addText('WORK EXPERIENCE', margin, y, 12, 'bold');
    
    // Experience data
    const experiences = [
      {
        title: "Senior Full Stack Developer",
        company: "Timesheets.com",
        period: "Jan 2017 – Present",
        highlights: [
          "Architected Vue-based calendar scheduling platform with drag-and-drop UI",
          "Built reusable components in Vue.js 2.x and 3.x enabling legacy migration",
          "Developed comprehensive Playwright test suites for API and UI testing",
          "Mentored junior developers and fostered collaborative team culture"
        ]
      },
      {
        title: "Senior Front-End Developer",
        company: "The Gap",
        period: "2016",
        highlights: [
          "Angular (v2+) development across multiple Gap Inc. brands",
          "Refactored legacy JavaScript into modular TypeScript components",
          "Led mobile-first and WCAG-compliant UI improvements",
          "Established mentorship programs and code review processes"
        ]
      },
      {
        title: "Full Stack Developer (Team Lead)",
        company: "Judicial Council of California",
        period: "Aug 2014 – Dec 2016",
        highlights: [
          "Led cross-functional team creating asset management portal",
          "Built ColdFusion 11 / Oracle 11g backend using FW/1 framework",
          "Introduced team to client-side MVC and OO JavaScript patterns",
          "Championed best practices for modularization and maintainability"
        ]
      },
      {
        title: "Frontend Developer",
        company: "Apartments.com",
        period: "2014 (6-month contract)",
        highlights: [
          "Developed interactive map feature for browsing listings by region",
          "Integrated Elasticsearch for geographic search and Redis for caching",
          "Built dynamic overlays and heatmaps with GIS analysts",
          "Delivered mobile-responsive UI with cross-browser support"
        ]
      }
    ];

    experiences.forEach((exp) => {
      // Check if we need a new page
      if (y > 250) {
        pdf.addPage();
        y = margin;
      }

      y = addText(`${exp.title} - ${exp.company}`, margin, y + 3, 11, 'bold');
      y = addText(exp.period, pageWidth - margin - 50, y - 3, 10);
      
      exp.highlights.forEach((highlight) => {
        y = addText(`• ${highlight}`, margin + 5, y + 2, 9);
      });
      y += 5;
    });

    // Key Projects
    if (y > 200) {
      pdf.addPage();
      y = margin;
    }

    y = addText('KEY PROJECTS', margin, y, 12, 'bold');
    
    const projects = [
      {
        name: "Real-Time Delta-Neutral Trading App (2023)",
        description: "High-speed trading application with Python core logic, TD Ameritrade API integration, and Firebase real-time synchronization."
      },
      {
        name: "MightMugs.com E-commerce Platform (2007)",
        description: "Full-stack custom mug design platform with 3D preview technology and complete manufacturing integration."
      },
      {
        name: "LiveStorefronts.com Mobile Platform (2013)",
        description: "Real-time inventory posting platform with phone-based uploads and Google Maps integration."
      },
      {
        name: "Mapified.com Interactive Mapping (2012)",
        description: "Location-based discovery platform with custom mapping interface and business directory integration."
      }
    ];

    projects.forEach((project) => {
      y = addText(`• ${project.name}`, margin, y + 3, 10, 'bold');
      y = addWrappedText(project.description, margin + 5, y + 2, pageWidth - (margin * 2) - 5, 9) + 3;
    });

    // Save the PDF
    pdf.save('Steven_Benjamin_Resume.pdf');
  };

  return (
    <Button
      onClick={generateResumePDF}
      variant="outline"
      size="sm"
      className="bg-[var(--portfolio-accent)]/10 border-[var(--portfolio-accent)]/30 text-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)]/20 hover:border-[var(--portfolio-accent)]/50"
    >
      <Download className="w-4 h-4 mr-2" />
      Download Resume PDF
    </Button>
  );
}