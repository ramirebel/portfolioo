import { useState, useCallback } from 'react'
import styles from './GlitchButton.module.css'

export default function GlitchButton({ as: Tag = 'button', small = false, children, onClick, ...props }) {
  const [glitching, setGlitching] = useState(false)

  const triggerGlitch = useCallback(() => {
    setGlitching(false)
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setGlitching(true)
        setTimeout(() => setGlitching(false), 380)
      })
    )
  }, [])

  const handleClick = useCallback((e) => {
    triggerGlitch()
    onClick?.(e)
  }, [onClick, triggerGlitch])

  return (
    <Tag
      {...props}
      onClick={handleClick}
      onMouseEnter={triggerGlitch}
      className={`${styles.button} ${small ? styles.small : ''} ${glitching ? styles.glitching : ''}`}
    >
      <div className={styles.borderBox} />
      <div className={`${styles.bbg} ${styles.bbgRed}`} />
      <div className={`${styles.bbg} ${styles.bbgCyan}`} />
      <div className={styles.fillFlash} />
      <div className={`${styles.textGhost} ${styles.textGhostRed}`}>{children}</div>
      <div className={`${styles.textGhost} ${styles.textGhostCyan}`}>{children}</div>
      <span className={styles.label}>{children}</span>
    </Tag>
  )
}
