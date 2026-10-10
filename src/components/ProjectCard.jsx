import React from 'react'

export default function ProjectCard({ project }) {
  const isUsableLink = (link) => link && !link.includes('demo.com') && link !== 'https://github.com'

  return (
    <article className="project-card">
      <div className="project-shot">
        <img src={project.image} alt={`${project.title} screenshot`} width="900" height="600" loading="lazy" />
        <span className="project-shot-overlay" aria-hidden="true" />
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3 className="project-name">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-stack" aria-label={`${project.title} technology stack`}>
          {project.technologies.map((technology) => (
            <span className="project-tech" key={technology}>{technology}</span>
          ))}
        </div>

        {isUsableLink(project.liveDemo) || isUsableLink(project.github) ? <div className="project-actions">
          {isUsableLink(project.liveDemo) && <a className="project-button project-button-primary" href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>}
          {isUsableLink(project.github) && <a className="project-button project-button-secondary" href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>}
        </div> : null}
      </div>
    </article>
  )
}
