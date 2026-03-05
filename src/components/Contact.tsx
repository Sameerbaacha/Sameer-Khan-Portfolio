import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { useToast } from "@/hooks/use-toast"; // import your toast hook
import { Github, Linkedin,  MailIcon, PhoneCall, } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast(); // toast function
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!form.email.trim() || !emailRegex.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (loading) return;

    setLoading(true);

    try {
      const subject = encodeURIComponent(`Message from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );

      // 👇 this opens user's email client
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      // reset form
      setForm({ name: "", email: "", message: "" });
      setErrors({});

      toast({
        title: "Email client opened",
        description: "Please send the email from your mail app.",
        variant: "subtleSuccess",
      });
    } catch (err) {
      console.error("Mailto failed:", err);
      toast({
        title: "Failed",
        description: "Could not open email client.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="glow-line" />
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading text-base tracking-widest uppercase mb-2">Contact</p>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="section-subtitle mt-2">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <motion.form
            autoComplete="off"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => {
                  setForm(prev => ({ ...prev, name: e.target.value }));
                  setErrors(prev => ({ ...prev, name: "" }));
                }}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-base focus:outline-none focus:border-primary/50 transition-colors"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => {
                  setForm(prev => ({ ...prev, email: e.target.value }));
                  setErrors(prev => ({ ...prev, email: "" }));
                }}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-base focus:outline-none focus:border-primary/50 transition-colors"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                name="message"
                autoComplete="off"
                value={form.message}
                onChange={(e) => {
                  setForm(prev => ({ ...prev, message: e.target.value }));
                  setErrors(prev => ({ ...prev, message: "" }));
                }}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-base focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-4 text-base text-muted-foreground">

                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <MailIcon size={25} />
                  {personalInfo.email}
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Github size={25} />
                  GitHub
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Linkedin size={25} />
                  LinkedIn
                </a>
                <a
                  href="https://wa.me/03150365039" // apna number daalo yahan
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-green-500 transition-colors"
                >
                  <PhoneCall size={25} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;