import { useState, useCallback } from 'react'
import styles from './GlitchLogo.module.css'
import logo from '../assets/logo.png'

export default function GlitchLogo() {
  const [active, setActive] = useState(false)

  const handleClick = useCallback(() => {
    if (active) return
    setActive(true)
    setTimeout(() => setActive(false), 650)
  }, [active])

  return (
    <div
      className={`${styles.wrapper} ${active ? styles.active : ''}`}
      onClick={handleClick}
    >
      <img src={logo} alt="Logo" className={styles.base} />
      <img src={logo} alt="" aria-hidden="true" className={`${styles.clone} ${styles.cloneCyan}`} />
      <img src={logo} alt="" aria-hidden="true" className={`${styles.clone} ${styles.cloneRed}`} />
    </div>
  )
}
