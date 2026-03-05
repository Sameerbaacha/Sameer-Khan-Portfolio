import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import heroBg from "@/assets/hero-bg.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen  flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/50 to-background" />
      </div>

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8 relative z-20 flex justify-center"
        >
          <div className="relative w-56 h-56 md:w-64 md:h-64">

            {/* 🔹 Outer floating border */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-4 rounded-full border border-primary/10"
            />

            {/* 🔹 Pulse glow (INSIDE the ring) */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.5, 0.85, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-3 rounded-full bg-primary/70 blur-lg z-10"
            />

            {/* 🔹 Avatar */}
            <motion.img
              src="/expansion_20260304195741357.jpg.jpeg"
              alt={personalInfo.name}
              referrerPolicy="no-referrer"
              loading="eager"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full rounded-full object-cover shadow-2xl bg-background z-20  border-[3px] border-primary/90"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-heading mb-4"
        >
          <div className="text-lg md:text-3xl text-primary font-semibold">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                1400,
                "MERN Stack Developer",
                1400,
                "React Developer",
                1400,
                "Web3 Enthusiast",
                1400,
              ]}
              speed={65}
              repeat={Infinity}
            />
            <span className="animate-pulse ml-1">|</span>
          </div>
        </motion.div>
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-primary font-heading text-sm md:text-base tracking-widest uppercase mb-4"
        >
          {personalInfo.title}
        </motion.p> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-6"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium md:text-base text-sm hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground font-medium md:text-base text-sm hover:border-primary/50 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-lg border border-border text-muted-foreground font-medium md:text-base text-sm hover:border-primary/50 transition-colors"
          >
            Download CV
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
