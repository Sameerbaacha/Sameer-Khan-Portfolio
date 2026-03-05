import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/portfolio";

const filters = ["all", "fullstack", "frontend"] as const;

const Projects = () => {
  const [active, setActive] = useState<string>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects">
      <div className="glow-line" />
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading text-base tracking-widest uppercase mb-2">Projects</p>
          <h2 className="section-title">Featured <span className="gradient-text">Work</span></h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-8 flex gap-3"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-base font-medium transition-all duration-200 capitalize ${active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
            >
              {f === "all" ? "All" : f === "fullstack" ? "Full-Stack" : "Frontend"}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-hover p-6 flex flex-col"
            >
              <h3 className="font-heading font-semibold text-foreground  text-xl mb-2">{project.title}</h3>
              <p className="text-lg text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-full text-[#00E6FF] text-base bg-muted">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
