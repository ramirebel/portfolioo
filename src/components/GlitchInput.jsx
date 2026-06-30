import { useState, useCallback } from 'react'
import styles from './GlitchInput.module.css'

export default function GlitchInput({ multiline = false, ...props }) {
  const [focused, setFocused] = useState(false)
  const [glitching, setGlitching] = useState(false)

  const triggerGlitch = useCallback(() => {
    setGlitching(false)
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setGlitching(true)
        setTimeout(() => setGlitching(false), 420)
      })
    )
  }, [])

  const wrapClass = [
    styles.wrapper,
    focused ? styles.focused : '',
    glitching ? styles.glitching : '',
    multiline ? styles.multiline : '',
  ].join(' ')

  const handlers = {
    onFocus: () => { setFocused(true); triggerGlitch() },
    onBlur: () => setFocused(false),
    onClick: () => { if (focused) triggerGlitch() },
  }

  return (
    <div className={wrapClass}>
      {multiline
        ? <textarea {...props} {...handlers} className={styles.field} />
        : <input   {...props} {...handlers} className={styles.field} />
      }
      <div className={styles.borderLine} />
      <div className={`${styles.bg} ${styles.bgRed}`} />
      <div className={`${styles.bg} ${styles.bgCyan}`} />
    </div>
  )
}
