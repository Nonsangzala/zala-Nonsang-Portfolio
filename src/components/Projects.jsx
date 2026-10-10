import React from 'react'
import ProjectCard from './ProjectCard'
import '../styles/projects.css'

const projects = [
  {
    id: 1,
    title: 'Restaurant Website',
    category: 'Hospitality',
    description: 'A polished dining site with menu browsing, reservations, and mobile-first ordering.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveDemo: 'https://restaurant-demo.com',
    github: 'https://github.com'
  },
  {
    id: 2,
    title: 'E-commerce Store',
    category: 'Commerce',
    description: 'Product discovery, filtered collections, cart flows, and checkout-ready storefront UX.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop',
    technologies: ['React', 'Redux', 'Stripe'],
    liveDemo: 'https://ecommerce-demo.com',
    github: 'https://github.com'
  },
  {
    id: 3,
    title: 'SaaS Landing Page',
    category: 'Marketing',
    description: 'Conversion-focused product page with premium sections and crisp responsive layouts.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop',
    technologies: ['Vite', 'React', 'CSS'],
    liveDemo: 'https://saas-demo.com',
    github: 'https://github.com'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'Personal Brand',
    description: 'A refined portfolio experience for showcasing services, case studies, and contact flows.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&h=600&fit=crop',
    technologies: ['React', 'Tailwind', 'Vercel'],
    liveDemo: 'https://portfolio-demo.com',
    github: 'https://github.com'
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    category: 'Data Product',
    description: 'Operational dashboard with charts, KPIs, cohort tables, and export-friendly views.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop',
    technologies: ['React', 'D3', 'Firebase'],
    liveDemo: 'https://analytics-demo.com',
    github: 'https://github.com'
  },
  {
    id: 6,
    title: 'Travel Booking App',
    category: 'Travel',
    description: 'Search, itinerary planning, booking cards, and destination-first responsive screens.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&h=600&fit=crop',
    technologies: ['React', 'Express', 'PostgreSQL'],
    liveDemo: 'https://travel-demo.com',
    github: 'https://github.com'
  },
  {
    id: 7,
    title: 'Finance Tracker',
    category: 'Fintech',
    description: 'Budget planning, expense insights, category trends, and secure account-style layouts.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=600&fit=crop',
    technologies: ['React', 'Chart.js', 'Node.js'],
    liveDemo: 'https://finance-demo.com',
    github: 'https://github.com'
  },
  {
    id: 8,
    title: 'AI Chat Assistant',
    category: 'AI Product',
    description: 'Conversational support interface with prompt templates, history, and polished states.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop',
    technologies: ['React', 'Python', 'OpenAI'],
    liveDemo: 'https://ai-chat-demo.com',
    github: 'https://github.com'
  },
  {
    id: 9,
    title: 'Real Estate Platform',
    category: 'Marketplace',
    description: 'Property cards, listing filters, map-friendly structure, and lead capture journeys.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveDemo: 'https://realestate-demo.com',
    github: 'https://github.com'
  },
  {
    id: 10,
    title: 'Fitness Tracker',
    category: 'Health',
    description: 'Workout logging, progress summaries, goal tracking, and clean mobile dashboards.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&h=600&fit=crop',
    technologies: ['React Native', 'Firebase', 'Expo'],
    liveDemo: 'https://fitness-demo.com',
    github: 'https://github.com'
  },
  {
    id: 11,
    title: 'Weather Dashboard',
    category: 'Utility',
    description: 'Forecast panels, live conditions, saved cities, and compact weather data cards.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=900&h=600&fit=crop',
    technologies: ['React', 'REST API', 'CSS'],
    liveDemo: 'https://weather-demo.com',
    github: 'https://github.com'
  },
  {
    id: 12,
    title: 'Video Platform',
    category: 'Media',
    description: 'Upload flows, curated playlists, playback pages, and creator-focused content layouts.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'AWS'],
    liveDemo: 'https://video-demo.com',
    github: 'https://github.com'
  }
]

const createLoop = (items) => [...items, ...items]

const reasons = [
  {
    title: 'Clean Code',
    icon: '</>'
  },
  {
    title: 'Fast Delivery',
    icon: '↗'
  },
  {
    title: 'Modern Design',
    icon: '△'
  },
  {
    title: 'SEO Friendly',
    icon: '×'
  },
  {
    title: 'Unlimited Revision',
    icon: '↻'
  },
  {
    title: 'Affordable Price',
    icon: '$'
  },
  {
    title: 'Client Satisfaction',
    icon: '♡'
  },
  {
    title: 'Friendly Support',
    icon: '☏'
  }
]

export default function Projects() {
  const topProjects = projects.slice(0, 6)
  const bottomProjects = projects.slice(6)

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="projects-header">
        <span className="projects-eyebrow">Selected Work</span>
        <h2 id="projects-title" className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Premium interfaces built with thoughtful details, modern stacks, and smooth interactions.
        </p>
      </div>

      <div className="projects-marquee" aria-label="Featured project showcase">
        <div className="marquee-row">
          <div className="marquee-track marquee-track-rtl">
            {createLoop(topProjects).map((project, index) => (
              <ProjectCard key={`top-${project.id}-${index}`} project={project} />
            ))}
          </div>
        </div>

        <div className="marquee-row">
          <div className="marquee-track marquee-track-ltr">
            {createLoop(bottomProjects).map((project, index) => (
              <ProjectCard key={`bottom-${project.id}-${index}`} project={project} />
            ))}
          </div>
        </div>
      </div>

      <div className="why-choose" aria-labelledby="why-choose-title">
        <div className="why-choose-heading">
          <h3 id="why-choose-title">Why Choose Me?</h3>
          <span aria-hidden="true"></span>
        </div>

        <div className="why-choose-grid">
          {reasons.map((reason) => (
            <div className="why-choose-item" key={reason.title}>
              <span className="why-choose-icon" aria-hidden="true">{reason.icon}</span>
              <strong>{reason.title}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
