import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

export default function VCardGenerator() {
  const generateVCard = () => {
    // Create vCard content in VCF format
    const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:Steven Benjamin
N:Benjamin;Steven;;;
ORG:Timesheets.com
TITLE:Senior Full Stack Developer
EMAIL;TYPE=INTERNET,WORK:me@stevenbenjamin.com
URL:https://stevenbenjamin.com
TEL;TYPE=WORK,VOICE:+1-415-324-9035
NOTE:Senior Full Stack Developer with 20+ years of experience specializing in Vue.js, ColdFusion, Python, React, and Angular. Currently at Timesheets.com building innovative solutions.
CATEGORIES:Technology,Software Development,Full Stack
REV:${new Date().toISOString().split('T')[0].replace(/-/g, '')}
END:VCARD`;

    // Create blob and download
    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    
    // Create temporary download link
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Steven_Benjamin_Contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button
      onClick={generateVCard}
      variant="outline"
      size="sm"
      className="bg-[var(--portfolio-success)]/10 border-[var(--portfolio-success)]/30 text-[var(--portfolio-success)] hover:bg-[var(--portfolio-success)]/20 hover:border-[var(--portfolio-success)]/50"
    >
      <UserPlus className="w-4 h-4 mr-2" />
      Download vCard
    </Button>
  );
}