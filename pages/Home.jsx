import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1>Shreyansh Gupta</h1>
      <p>Full Stack Developer</p>

      <div className="hero-buttons">
        <a href="/projects" className="btn primary">View Projects</a>
        <a href="/resume.pdf" className="btn outline" download>Download Resume</a>
      </div>
    </motion.section>
  );
}
