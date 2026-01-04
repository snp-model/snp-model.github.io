import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Monitor } from 'lucide-react';
import { projects } from '../data/projects';
import './Projects.css';

// プロジェクトカード
function ProjectCard({ project, index }) {
  const isMobile = project.type === 'mobile';

  return (
    <motion.article
      className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* デバイスモックアップ */}
      <div className={`project-card__mockup ${isMobile ? 'project-card__mockup--mobile' : 'project-card__mockup--web'}`}>
        <div className="project-card__device">
          <div className="project-card__screen">
            {isMobile ? <Smartphone size={48} /> : <Monitor size={48} />}
          </div>
        </div>
      </div>

      {/* 情報 */}
      <div className="project-card__info">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        {/* リンク（Liveのみ） */}
        {project.links.live && (
          <div className="project-card__links">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--primary"
              aria-label="サイトを見る"
            >
              <ExternalLink size={18} />
              <span>View</span>
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="works" className="projects section">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="projects__title">Works</h2>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
