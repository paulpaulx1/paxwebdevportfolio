import styles from './Pricing.module.css'

const tiers = [
  {
    name: 'Static Site',
    price: 'from $2,500',
    description: 'Ideal for simple brochure sites, landing pages, or portfolios that don\'t need a CMS.',
    includes: [
      'Custom HTML/CSS/JS build',
      'Mobile-responsive design',
      'On-page SEO basics',
      'DNS & hosting setup',
      'Contact form',
      '1 round of revisions',
    ],
    note: null,
    featured: false,
    cta: 'Get a quote',
  },
  {
    name: 'Full Build',
    price: '$3,000–$5,000',
    description: 'The most popular option. A complete custom site in Next.js, connected to Sanity CMS so you can manage content yourself after launch.',
    includes: [
      'Next.js custom build',
      'Sanity CMS integration',
      'Structured content schemas',
      'Mobile-responsive design',
      'On-page SEO + meta tags + JSON-LD schema',
      'DNS & hosting setup on Vercel',
      'Image optimization',
      '2 rounds of revisions',
    ],
    note: 'Includes Sanity CMS',
    featured: true,
    cta: 'Start a project',
  },
  {
    name: 'SEO & Content',
    price: 'from $1,500',
    description: 'For clients who already have a site but want to grow organic traffic. Research-backed strategy + professionally written copy.',
    includes: [
      'SemRush keyword & competitor research',
      'Strategic page structure recommendations',
      'Meta tags, OG tags, sitemap',
      'Local JSON-LD schema markup',
      'Blog content (copywriter-produced)',
      'Monthly progress reporting',
    ],
    note: 'Add-on or standalone',
    featured: false,
    cta: 'Get a quote',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="mono">Transparent Pricing</p>
          <h2 className={styles.title}>
            No mystery quotes.<br />
            No bloated retainers.
          </h2>
          <p className={styles.sub}>
            One-time project fees. You own everything when we're done.
            No monthly fees to keep your site alive.
          </p>
        </div>

        <div className={styles.grid}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${styles.card} ${tier.featured ? styles.featured : ''}`}
            >
              {tier.featured && (
                <div className={styles.featuredBadge}>Most popular</div>
              )}
              <div className={styles.cardHeader}>
                <p className={styles.tierName}>{tier.name}</p>
                <p className={styles.price}>{tier.price}</p>
                {tier.note && (
                  <span className={styles.noteTag}>{tier.note}</span>
                )}
              </div>
              <p className={styles.desc}>{tier.description}</p>
              <ul className={styles.includes}>
                {tier.includes.map((item) => (
                  <li key={item}>
                    <span className={styles.check}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`${styles.cta} ${tier.featured ? styles.ctaPrimary : styles.ctaGhost}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className={styles.disclaimer}>
          Prices vary based on complexity, number of pages, and content volume.
          Every project starts with a free 30-minute call.
        </p>
      </div>
    </section>
  )
}
