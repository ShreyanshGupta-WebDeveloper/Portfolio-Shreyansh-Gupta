import { projects } from "../data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((p, i) => (
          <motion.div
            className="card"
            key={i}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noreferrer">GitHub</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
