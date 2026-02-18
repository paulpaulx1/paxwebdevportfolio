import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.wordmark}>
            PM<span className={styles.dot}>.</span>
          </span>
          <p className={styles.tagline}>
            Custom web development & SEO.<br />
            New York City.
          </p>
        </div>

        <nav className={styles.links}>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span className={styles.copy}>
          © {year} Pax Web Dev. All rights reserved.
        </span>
        <span className={styles.built}>
          Built with Next.js + Sanity
        </span>
      </div>
    </footer>
  )
}
