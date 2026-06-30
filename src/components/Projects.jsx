import styles from './Projects.module.css'
import GlitchButton from './GlitchButton'
import eVentiScreenshot from '../assets/e-venti-screenshot.png'
import wildOasisScreenshot from '../assets/wild-oasis-screenshot.png'
import kovaScreenshot from '../assets/kova-screenshot.png'

const projects = [
  {
    title: 'Kova',
    description:
      'Multi-agent AI system that adapts lecture content for students in low-connectivity environments. Processes videos through a pipeline : transcription, LLM summarisation, animated generation, and multi-quality compression — then uses an LSTM model to predict network degradation and serve the optimal format in real time.',
    tags: ['Python', 'Flask', 'Whisper', 'Groq', 'TensorFlow.js', 'Manim'],
    link: 'https://kova-rami.duckdns.org/',
    github: 'https://github.com/ramirebel/kova',
    image: kovaScreenshot,
    bg: '#e8edf4',
  },
  {
    title: 'The Wild Oasis',
    description:
      'Internal hotel management app for staff : manage cabins, bookings, check-ins/outs, and guests from a dashboard with sales charts, dark mode, and auth-protected routes.',
    tags: ['React', 'Supabase', 'React Query', 'Vite'],
    link: 'https://the-wild-oasis-rami.netlify.app',
    github: null,
    image: wildOasisScreenshot,
    bg: '#e8e4f0',
  },
  {
    title: 'E-Venti',
    description:
      'Event platform to create and manage events with ticket types, pricing, and availability. Filter by location, category, or date, follow organizers, save events, and access a personal dashboard with a dedicated social feed.',
    tags: ['React', 'Vite'],
    link: 'https://e-venti.netlify.app/',
    github: null,
    image: eVentiScreenshot,
    bg: '#e4ece8',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Projects</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <a key={project.title} href={project.link} className={styles.card}>
            <div className={styles.thumbnail}>
              <div
                className={styles.thumbnailInner}
                style={{ backgroundColor: project.image ? undefined : project.bg }}
              >
                {project.image && <img src={project.image} alt={project.title} />}
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.meta}>
                <h3 className={styles.cardTitle} data-text={project.title}>
                  {project.title}
                </h3>
                <span className={styles.arrow}>↗</span>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
                {project.github && (
                  <GlitchButton
                    as="a"
                    small
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    README ↗
                  </GlitchButton>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
