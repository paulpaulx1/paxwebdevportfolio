import styles from './Services.module.css'

const services = [
  {
    number: '01',
    title: 'Site Design & Build',
    subtitle: 'HTML/CSS/JS or Next.js',
    description:
      'Custom-coded websites — no templates, no page builders. Built in plain HTML/CSS/JS or Next.js depending on your needs. Either way, you get a fast, secure, fully customizable site that you actually own.',
    points: [
      'Zero security vulnerabilities (no plugin sprawl)',
      'Core Web Vitals optimized out of the gate',
      'Endlessly customizable — no "theme limits"',
      'Scales from simple brochure to complex web app',
    ],
    tag: 'Core Service',
  },
  {
    number: '02',
    title: 'Content Management',
    subtitle: 'Powered by Sanity CMS',
    description:
      'Sanity gives you a clean, structured editing experience built right into your site. Update copy, swap images, add blog posts, manage team members — no developer needed after launch.',
    points: [
      'Fully customizable content studio',
      'Real-time collaboration',
      'Structured content = better SEO',
      'Works seamlessly with Next.js',
    ],
    tag: 'Recommended Add-on',
  },
  {
    number: '03',
    title: 'SEO & Content Strategy',
    subtitle: 'SemRush-backed, human-written',
    description:
      "Technical SEO isn't guesswork. I use SemRush to identify the right keywords, then structure your pages strategically — headings, schema markup (local JSON-LD), meta tags, internal linking. Blog content is produced with a professional copywriter I trust.",
    points: [
      'Keyword & competitor research via SemRush',
      'Strategic HTML structure & heading hierarchy',
      'Local JSON-LD schema for local businesses',
      'Meta tags, OG tags, sitemap, robots.txt',
      'Ongoing blog content (copywriter-produced)',
    ],
    tag: 'Growth Service',
  },
  {
    number: '04',
    title: 'DNS, Hosting & Deployment',
    subtitle: 'End-to-end launch support',
    description:
      'Most developers hand you a ZIP file and disappear. I handle the full launch: domain configuration, DNS records, SSL, deployment to Vercel or Netlify, and email forwarding setup. You get a live site, not homework.',
    points: [
      'Domain & DNS configuration',
      'Vercel / Netlify deployment',
      'SSL certificate setup',
      'Email forwarding (Google Workspace or Proton)',
      'Post-launch performance check',
    ],
    tag: 'Included in All Builds',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Services built for<br />
            <em>small businesses</em> that want<br />
            to actually compete online.
          </h2>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.number} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.number}>{s.number}</span>
                <span className={styles.tag}>{s.tag}</span>
              </div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceSubtitle}>{s.subtitle}</p>
              <p className={styles.desc}>{s.description}</p>
              <ul className={styles.points}>
                {s.points.map((p) => (
                  <li key={p}>
                    <span className={styles.check}>↗</span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.whyNot}>
          <div className={styles.whyNotInner}>
            <p className="mono">Why not WordPress / Wix / Squarespace?</p>
            <div className={styles.whyNotGrid}>
              <div>
                <h4>Security nightmares</h4>
                <p>WordPress powers 43% of the web, which makes it the #1 target for hackers. Plugins go unmaintained. Sites get infected. Custom code has no attack surface.</p>
              </div>
              <div>
                <h4>Performance drag</h4>
                <p>Page builders generate bloated, inefficient HTML. Google notices. Custom-coded sites routinely score 95–100 on Lighthouse without trying.</p>
              </div>
              <div>
                <h4>You don't own it</h4>
                <p>Wix and Squarespace lock you in. Custom code lives in a Git repo — yours forever, portable anywhere, no subscription required to keep the lights on.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
