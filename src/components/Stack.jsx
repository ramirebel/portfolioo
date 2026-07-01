import styles from './Stack.module.css'
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiC,
  SiPhp,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiReactquery,
  SiVite,
  SiAngular,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiSpringboot,
  SiFlask,
  SiSupabase,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiLinux,
  SiKubernetes,
} from '@icons-pack/react-simple-icons'

const categories = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'Java', Icon: SiOpenjdk, color: '#ED8B00' },
      { name: 'C', Icon: SiC, color: '#A8B9CC' },
      { name: 'SQL', devicon: 'devicon-sqldeveloper-plain colored' },
      { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'React Router', Icon: SiReactrouter, color: '#CA4245' },
      { name: 'Redux Toolkit', Icon: SiRedux, color: '#764ABC' },
      { name: 'React Query', Icon: SiReactquery, color: '#FF4154' },
      { name: 'Vite', Icon: SiVite, color: '#646CFF' },
      { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'shadcn/ui', Icon: SiShadcnui, color: '#111111' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', Icon: SiExpress, color: '#111111' },
      { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Flask', Icon: SiFlask, color: '#111111' },
      { name: 'Supabase', Icon: SiSupabase, color: '#3ECF8E' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'Oracle', devicon: 'devicon-oracle-original colored' },
    ],
  },
  {
    label: 'Tools & DevOps',
    items: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
      { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
    ],
  },
  {
    label: 'Methodologies',
    items: [{ name: 'Agile / Scrum', badge: true }],
  },
]

export default function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <h2 className={styles.title}>Stack</h2>
      <p className={styles.subtitle}>Technologies I work with.</p>

      <div className={styles.categories}>
        {categories.map((cat) => (
          <div key={cat.label} className={styles.category}>
            <span className={styles.categoryLabel}>{cat.label}</span>
            <div className={styles.items}>
              {cat.items.map((tech) =>
                tech.badge ? (
                  <div key={tech.name} className={styles.badgePill}>
                    <span className={styles.badgeText}>{tech.name}</span>
                  </div>
                ) : tech.devicon ? (
                  <div key={tech.name} className={styles.pill}>
                    <i className={tech.devicon} style={{ fontSize: 18 }} />
                    <span className={styles.pillName}>{tech.name}</span>
                  </div>
                ) : (
                  <div key={tech.name} className={styles.pill}>
                    <tech.Icon size={18} color={tech.color} />
                    <span className={styles.pillName}>{tech.name}</span>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
