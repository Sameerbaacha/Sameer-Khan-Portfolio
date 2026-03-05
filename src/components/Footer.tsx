import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, MailIcon, } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-base text-muted-foreground">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-base">
          <Github size={25} /> 
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-base">
          <Linkedin size={25} />  
        </a>
        <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors text-base">
         <MailIcon size={25} />  
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
