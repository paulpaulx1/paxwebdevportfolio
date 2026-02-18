import Link from 'next/link'
import { Project } from '@/lib/types'
import styles from './Work.module.css'

// Fallback static data until Sanity is populated
const fallbackProjects: Project[] = [
  {
    _id: '1',
    title: 'SMG CPA',
    client: 'SMG CPA',
    slug: { current: 'smg-cpa' },
    category: 'full-build',
    excerpt:
      'Full website rebuild for a New York accounting firm — fast, credible, and built to rank for local CPA search terms.',
    technologies: ['Next.js', 'Sanity CMS', 'SEO'],
    featured: true,
    order: 1,
  },
  {
    _id: '2',
    title: 'Andrea Callard',
    client: 'Andrea Callard',
    slug: { current: 'andrea-callard' },
    category: 'full-build',
    excerpt:
      'Film portfolio site with lightbox galleries, video integration, and a Sanity-powered project archive for a documentary filmmaker.',
    technologies: ['Next.js', 'Sanity CMS', 'HTML/CSS/JS'],
    featured: true,
    order: 2,
  },
  {
    _id: '3',
    title: 'Whale Creek',
    client: 'Whale Creek',
    slug: { current: 'whale-creek' },
    category: 'full-build',
    excerpt:
      'Modern web presence built on a custom HTML/CSS/JS stack — clean, performant, no dependencies.',
    technologies: ['HTML/CSS/JS', 'DNS/Hosting'],
    featured: true,
    order: 3,
  },
  {
    _id: '4',
    title: 'House of the Redeemer',
    client: 'House of the Redeemer',
    slug: { current: 'house-of-the-redeemer' },
    category: 'full-build',
    excerpt:
      'Event-driven church website with Sanity CMS for staff to manage services, events, and announcements independently.',
    technologies: ['Next.js', 'Sanity CMS', 'SEO'],
    featured: true,
    order: 4,
  },
]

interface WorkProps {
  projects?: Project[]
}

const categoryLabel: Record<string, string> = {
  'full-build': 'Full Build',
  'seo-content': 'SEO & Content',
  redesign: 'Redesign',
  cms: 'CMS Integration',
}

export default function Work({ projects }: WorkProps) {
  const items = projects?.length ? projects : fallbackProjects

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="mono">Selected Work</p>
          <h2 className={styles.title}>
            Sites that get found,<br />
            load fast, and look right.
          </h2>
        </div>

        <div className={styles.grid}>
          {items.map((project, i) => (
            <article key={project._id} className={styles.card}>
              {/* Image placeholder / real image */}
              <div className={styles.imgWrap}>
                {project.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.coverImage} alt={project.title} />
                ) : (
                  <div className={styles.placeholder}>
                    <span className={styles.placeholderNum}>0{i + 1}</span>
                  </div>
                )}
                <div className={styles.overlay}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewBtn}
                    >
                      View live site ↗
                    </a>
                  )}
                </div>
              </div>

              <div className={styles.meta}>
                <span className={styles.category}>
                  {categoryLabel[project.category] ?? project.category}
                </span>
                <h3 className={styles.clientName}>{project.client}</h3>
                <p className={styles.excerpt}>{project.excerpt}</p>
                <div className={styles.tags}>
                  {project.technologies.map((t) => (
                    <span key={t} className={styles.tech}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
