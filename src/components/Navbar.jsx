import styles from './Navbar.module.css'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.links}>
          <a href="#projects" className={styles.link} data-text="Projects">Projects</a>
          <a href="#stack" className={styles.link} data-text="Stack">Stack</a>
          <a href="#contact" className={styles.link} data-text="Contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
