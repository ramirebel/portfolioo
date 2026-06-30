import styles from './Hero.module.css'
import photo from '../assets/my-photo.jpg'

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>
          <span className={styles.line} data-text="I am Mohamed Rami Benaouf,">
            I am Mohamed Rami Benaouf,
          </span>
          <span className={styles.line} data-text="a full-stack developer.">
            a full-stack developer.
          </span>
          <span className={`${styles.line} ${styles.muted}`} data-text="Available for work, freelance & collaborations.">
            Available for work, freelance &amp; collaborations.
          </span>
        </h1>
        <div className={styles.photo}>
          <img src={photo} alt="Mohamed Rami Benaouf" />
        </div>
      </div>
    </section>
  )
}
