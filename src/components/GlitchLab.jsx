import styles from './GlitchLab.module.css'

export default function GlitchLab() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Glitch Lab — pick your favourite</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.label}>1 · Shake</p>
          <input className={`${styles.input} ${styles.shake}`} placeholder="Click me..." />
          <button className={`${styles.btn} ${styles.shakeBtn}`}>Send message</button>
          <p className={styles.desc}>Shudders horizontally on focus / click</p>
        </div>

        <div className={styles.card}>
          <p className={styles.label}>2 · Scanline</p>
          <input className={`${styles.input} ${styles.scanline}`} placeholder="Click me..." />
          <button className={`${styles.btn} ${styles.scanlineBtn}`}>Send message</button>
          <p className={styles.desc}>A line sweeps across, leaves a colored border</p>
        </div>

        <div className={styles.card}>
          <p className={styles.label}>3 · Flicker</p>
          <input className={`${styles.input} ${styles.flicker}`} placeholder="Click me..." />
          <button className={`${styles.btn} ${styles.flickerBtn}`}>Send message</button>
          <p className={styles.desc}>Background flickers rapidly then settles</p>
        </div>

        <div className={styles.card}>
          <p className={styles.label}>4 · Border Stutter</p>
          <input className={`${styles.input} ${styles.stutter}`} placeholder="Click me..." />
          <button className={`${styles.btn} ${styles.stutterBtn}`}>Send message</button>
          <p className={styles.desc}>Border draws itself in choppy steps</p>
        </div>
      </div>
    </section>
  )
}
