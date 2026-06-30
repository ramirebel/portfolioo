import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'
import GlitchInput from './GlitchInput'
import GlitchButton from './GlitchButton'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.aside}>
          <p className={styles.asideText}>
            Looking to start a new project or just want to say hi? Send me an email and I&apos;ll do
            my best to reply within 24 hrs!
          </p>
          <p className={styles.asideText}>
            If contact forms aren&apos;t your thing... send me an email at{' '}
            <a href="mailto:mohamedramibenaouf@outlook.com" className={styles.emailLink}>
              mohamedramibenaouf@outlook.com
            </a>
          </p>
        </div>

        <div>
          <h2 className={styles.title}>Say Hello</h2>
          <p className={styles.subtitle}>
            Have a project in mind or just want to connect? Drop me a message.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <GlitchInput type="text" name="name" placeholder="Name" required />
              <GlitchInput type="email" name="email" placeholder="Email" required />
            </div>
            <GlitchInput type="text" name="title" placeholder="Subject" required />
            <GlitchInput multiline name="message" placeholder="Your message" required />
            <GlitchButton type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </GlitchButton>
            {status === 'success' && (
              <p className={styles.successMsg}>Message sent! I&apos;ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
