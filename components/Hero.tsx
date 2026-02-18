import { Project } from '@/lib/types'
import ProjectCarousel from './ProjectCarousel'
import { Code2, FileText, Palette, Lightbulb } from 'lucide-react'
import styles from './Hero.module.css'

interface HeroProps {
  projects?: Project[]
}

// Hardcoded fallback for testing
// Screenshots are in /public/screenshots/
const fallbackProjects: Project[] = [
  {
    _id: '1',
    title: 'Whale Creek',
    client: 'Whale Creek Construction',
    slug: { current: 'whale-creek' },
    category: 'full-build',
    excerpt: 'Indianapolis contractor showcasing custom decks and outdoor living.',
    technologies: ['Next.js', 'Sanity CMS', 'SEO'],
    liveUrl: 'https://whale-creek.vercel.app/',
    coverImage: '/screenshots/whale-creek-splash.png',
    featured: true,
  },
  {
    _id: '2',
    title: 'SMG CPA',
    client: 'SMG CPA',
    slug: { current: 'smg-cpa' },
    category: 'full-build',
    excerpt: 'Indianapolis accounting firm — built for credibility, clarity, and local search.',
    technologies: ['Next.js', 'SEO'],
    liveUrl: 'https://www.smgcpafirm.com/',
    coverImage: '/screenshots/smg-splash.png',
    featured: true,
  },
  {
    _id: '3',
    title: 'Andrea Callard',
    client: 'Andrea Callard',
    slug: { current: 'andrea-callard' },
    category: 'full-build',
    excerpt: 'Film portfolio with lightbox galleries and Sanity-powered project archive.',
    technologies: ['Next.js', 'Sanity CMS'],
    liveUrl: 'https://andreacallard.com/',
    coverImage: '/screenshots/andrea-splash.png',
    featured: true,
  },
  
  {
    _id: '4',
    title: 'House of the Redeemer',
    client: 'House of the Redeemer',
    slug: { current: 'house-of-the-redeemer' },
    category: 'full-build',
    excerpt: 'Church website with event calendar and content management.',
    technologies: ['Next.js', 'Sanity CMS'],
    liveUrl: 'https://www.houseoftheredeemer.org/',
    coverImage: '/screenshots/hotr-splash2.png',
    featured: true,
  },
]

export default function Hero({ projects }: HeroProps) {
  const displayProjects = projects && projects.length > 0 ? projects : fallbackProjects

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <h1 className={styles.headline}>
            Your brand,<br />built right.
          </h1>

          <div className={styles.sub}>
            <p>
              Building a site isn't just technical work. It's an opportunity to define what your business stands for — and communicate it clearly. We'll build it from scratch and position you to compete.
            </p>

            <div className={styles.actions}>


              <div className={styles.icons}>
                <a href="#development" className={styles.iconItem}>
                  <Code2 className={styles.icon} size={34} />
                  <span>Development</span>
                </a>
                <a href="#content" className={styles.iconItem}>
                  <FileText className={styles.icon} size={34} />
                  <span>Content</span>
                </a>
                <a href="#design" className={styles.iconItem}>
                  <Palette className={styles.icon} size={34} />
                  <span>Design</span>
                </a>
                <a href="#strategy" className={styles.iconItem}>
                  <Lightbulb className={styles.icon} size={34} />
                  <span>Strategy</span>
                </a>
              </div>

              <a href="#contact">Start a project</a>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <ProjectCarousel projects={displayProjects} />
        </div>
      </div>
    </section>
  )
}