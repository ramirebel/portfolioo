import styles from './Stack.module.css'

const stack = [
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
  { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
  { name: 'SQL', icon: 'devicon-mysql-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
]

export default function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <h2 className={styles.title}>Stack</h2>
      <p className={styles.subtitle}>Technologies I work with.</p>

      <div className={styles.grid}>
        {stack.map((tech) => (
          <div key={tech.name} className={styles.item}>
            <div className={styles.iconWrap}>
              <i className={tech.icon} />
            </div>
            <span className={styles.name}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
