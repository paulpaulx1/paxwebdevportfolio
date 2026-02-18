import styles from './Services.module.css'

const services = [
  {
    id: 'development',
    number: '01',
    title: 'Development',
    subtitle: 'Next.js or HTML/CSS/JS',
    description:
      'Custom-coded sites with no templates or page builders. Built in modern JavaScript frameworks or plain HTML — depending on what makes sense for your business. Fast, secure, and fully yours.',
    points: [
      'Zero plugin vulnerabilities',
      'Core Web Vitals optimized out of the gate',
      'Scales from simple to complex',
      'Hosted on Vercel or Netlify',
    ],
    tag: 'Core',
  },
  {
    id: 'content',
    number: '02',
    title: 'Content',
    subtitle: 'Management + copywriting',
    description:
      'Sanity CMS for easy updates, plus professional copywriting that actually sounds like your business. Update pages yourself or hand off blog content to someone who knows how to write.',
    points: [
      'Clean editing interface',
      'Real-time collaboration',
      'Professional copywriting available',
      'SEO-friendly structure',
    ],
    tag: 'Recommended',
  },
  {
    id: 'design',
    number: '03',
    title: 'Design',
    subtitle: 'Visual identity + UI',
    description:
      'Cohesive visual systems that work across your site. Typography, color, layout — designed to represent your business accurately and compete with whats out there.',
    points: [
      'Typography-first approach',
      'Responsive across all devices',
      'Accessible and performant',
      'No generic templates',
    ],
    tag: 'Included',
  },
  {
    id: 'strategy',
    number: '04',
    title: 'Strategy',
    subtitle: 'SEO + positioning',
    description:
      'Keyword research via SemRush, competitive analysis, and technical SEO setup. Schema markup, meta tags, sitemap — the stuff that actually helps people find you.',
    points: [
      'SemRush keyword research',
      'Local JSON-LD schema',
      'Meta tags + OG tags',
      'Competitive positioning',
    ],
    tag: 'Growth',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            What you're actually buying
          </h2>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.id} id={s.id} className={styles.card}>
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
            <p className={styles.whyNotTitle}>Why not WordPress / Wix / Squarespace?</p>
            <div className={styles.whyNotGrid}>
              <div>
                <h4>Security</h4>
                <p>WordPress is the #1 hacking target. Custom code has no attack surface.</p>
              </div>
              <div>
                <h4>Performance</h4>
                <p>Page builders generate bloated HTML. Custom sites score 95+ on Lighthouse.</p>
              </div>
              <div>
                <h4>Ownership</h4>
                <p>Your code lives in a Git repo. Portable anywhere, no platform lock-in.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}