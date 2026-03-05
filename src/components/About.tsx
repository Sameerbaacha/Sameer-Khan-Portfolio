import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutText } from "@/data/portfolio";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <div className="glow-line" />
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading text-base tracking-widest uppercase mb-2">About Me</p>
          <h2 className="section-title">
            Passionate about crafting <span className="gradient-text">digital experiences</span>
          </h2>
        </motion.div>

        <div className="mt-10 max-w-3xl space-y-6 text-lg">
          {aboutText.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="text-muted-foreground leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
