import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import { Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
        ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/50" : ""}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 items-center h-16">

          {/* LEFT — Logo */}
          <div className="flex justify-start">
            <a href="#home" className="font-heading text-2xl font-bold gradient-text">
              SAMEER
            </a>
          </div>

          {/* CENTER — Desktop nav */}
          <div className="hidden md:flex justify-center items-center gap-6 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base md:text-xs lg:text-lg text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* RIGHT — Social icons + mobile toggle */}
          <div className="flex justify-end items-center gap-4">
            {/* Desktop icons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Github size={25} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={25} />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-foreground"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-foreground"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-foreground"
              />
            </button>
          </div>
        </div>
      </div>
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} // shutter feel
      className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
    >
      <div className="flex flex-col justify-center items-center px-4 py-6 space-y-4">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="text-base text-muted-foreground hover:text-primary font-medium transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;