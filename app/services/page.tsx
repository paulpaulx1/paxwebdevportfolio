'use client'

import Link from 'next/link'
import { Palette } from 'lucide-react'
import styles from './page.module.css'

const test={a:1,b:2}

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      {/* Hero with spinning palette */}
      <section className={styles.hero}>
        <div className={styles.shapes}>
          <div className={styles.paletteNudge}>
            <Palette className={styles.paletteIcon} size={880} />
          </div>
        </div>
        <div className={styles.heroOverlay}>
          <div className="container">
            <h1 className={styles.heroTitle}>
              How we build sites<br />that compete
            </h1>
            <p className={styles.heroLead}>
              Research, design, code, optimize.<br />Here's the whole process.
            </p>
          </div>
        </div>
      </section>

      {/* Development */}
      <section id="development" className={styles.service}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <span className={styles.serviceNumber}>01</span>
              <h2 className={styles.serviceTitle}>Development</h2>
              <p className={styles.serviceSubtitle}>Next.js or HTML/CSS/JS</p>

              <div className={styles.serviceBody}>
                <p>
                  Websites built from scratch — no templates, no page builders.
                </p>
                <p>
                  We use modern JavaScript frameworks when they’re needed, and plain HTML when they’re not.
                  The goal isn’t to use the newest tool — it’s to use the right one for your business.
                </p>

                <h3>The WordPress problem</h3>
                <p>
                  Most small businesses start with WordPress because it&apos;s familiar. But WordPress sites come with maintenance overhead.
                </p>
                <p>
                  Plugins age. Security patches pile up. Page builders generate thousands of lines of unnecessary code just to render a single page.
                </p>
                <p>
                  The average page-builder site loads in over 2 seconds. You&apos;re competing with sites that load in under one.
                </p>

                <h3>What custom code delivers</h3>
                <p>
                  Sites built from scratch load faster, rank better, and remove entire categories of maintenance risk.
                </p>
                <p>
                  No plugin updates. No patch cycles. No bloated markup slowing things down.
                </p>
                <p>
                  Just a site that works — and keeps working.
                </p>

                <h3>How we approach it</h3>
                <p>
                  We choose the stack based on what the site actually needs:
                </p>
                <ul>
                  <li>
                    <strong>Next.js</strong> for sites with dynamic content or ongoing updates
                  </li>
                  <li>
                    <strong>Plain HTML/CSS/JS</strong> for brochure-style sites
                  </li>
                </ul>

                <h3>On simplicity</h3>
                <p>
                  There&apos;s something powerful about sites built the way they&apos;ve existed since the 90s.
                </p>
                <p>
                  No framework. No build process. Just HTML, CSS, and a little JavaScript when needed.
                </p>
                <p>
                  For many businesses — a contractor, a law firm, a restaurant — that&apos;s all you need.
                </p>
                <p>
                  Five pages that load instantly and don&apos;t break. No CMS. No database. No subscription to keep the lights on.
                </p>
                <p>
                  Just a site that works.
                </p>

                <h3>What you get</h3>
                <ul>
                  <li>Hosted on Vercel or Netlify (global CDN, automatic SSL)</li>
                  <li>Core Web Vitals optimized from day one</li>
                  <li>Mobile-responsive and accessible</li>
                  <li>No maintenance overhead</li>
                  <li>Code that&apos;s yours — portable anywhere</li>
                </ul>
              </div>
            </div>

            <div className={styles.serviceMeta}>
              <div className={styles.metaBox}>
                <h4>Timeline</h4>
                <p>2-4 weeks for most sites</p>
              </div>
              <div className={styles.metaBox}>
                <h4>Starting at</h4>
                <p>$2,700 one-time or $150/month</p>
              </div>
              <div className={styles.metaBox}>
                <h4>What&apos;s included</h4>
                <ul>
                  <li>Responsive design</li>
                  <li>SEO-ready structure</li>
                  <li>Deployment &amp; DNS setup</li>
                  <li>SSL certificate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section id="content" className={styles.service}>
  <div className="container">
    <div className={styles.serviceGrid}>



    
      <div className={styles.serviceContent}>
        <span className={styles.serviceNumber}>02</span>
        <h2 className={styles.serviceTitle}>Content</h2>
        <p className={styles.serviceSubtitle}>Management + copywriting</p>

        <div className={styles.serviceBody}>
          <p>
            Sanity CMS gives you a simple way to manage your site after launch.
          </p>

          <p>
            Update copy.<br />
            Swap images.<br />
            Add projects or team members.
          </p>

          <p>No developer needed.</p>

          <h3>Who this is for</h3>
          <p>
            Anyone who publishes regularly.
          </p>
          <p>
            Contractors documenting projects.<br />
            Businesses posting updates.<br />
            Churches managing events.<br />
            Law firms adding case results.<br />
            Restaurants updating menus.
          </p>

          <p>
            You don’t need a CMS to tweak your About page once a year.
          </p>

          <p>
            You need one when you’re adding content often — and when that
            content needs to stay organized.
          </p>

          <h3>Why Sanity</h3>
          <p>
            Sanity gives you an editing interface built around your actual
            content.
          </p>

          <p>
            Projects.<br />
            Blog posts.<br />
            Events.<br />
            Team members.
          </p>

          <p>
            Whatever your business needs — structured the way you work.
          </p>

          <h3>Why not WordPress</h3>
          <p>
            WordPress was built as a blogging platform in 2003.
          </p>

          <p>
            It works well for blogs.
          </p>

          <p>
            But when you start managing more complex content — like a
            portfolio of projects with images, timelines, specs, and
            testimonials — it gets clumsy.
          </p>

          <p>
            Plugins stack up.<br />
            Structure breaks down.<br />
            Content becomes harder to manage.
          </p>

          <p>
            Sanity separates your content from your site.
          </p>

          <p>
            You define the structure once, and the editing experience follows it.
          </p>

          <p>
            No plugins.<br />
            No page builder.<br />
            Just content that behaves the way it should.
          </p>

          <h3>The SEO benefit</h3>
          <p>
            Every new piece of content becomes another entry point.
          </p>

          <p>
            Before: 5 static pages<br />
            After: 5 pages + 25 projects (and growing)
          </p>

          <p>
            More content means more opportunities to be found.
          </p>

          <h3>Copywriting still matters</h3>
          <p>
            Structure alone doesn’t create clarity.
          </p>

          <p>
            That’s why I work with a professional copywriter.
          </p>

          <p>
            Sanity handles the system.<br />
            Human writers handle the voice.
          </p>

          <p>
            Clear, thoughtful writing that reflects your business —
            and helps people find you.
          </p>
        </div>
      </div>

      <div className={styles.serviceMeta}>
        <div className={styles.metaBox}>
          <h4>Timeline</h4>
          <p>
            CMS setup: 1 week<br />
            Copywriting: 2–3 weeks
          </p>
        </div>
        <div className={styles.metaBox}>
          <h4>Pricing</h4>
          <p>
            CMS: +$500–1,000<br />
            Copywriting: $150–300/page
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Design - Placeholder for visual */}
      <section id="design" className={styles.service}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <span className={styles.serviceNumber}>03</span>
              <h2 className={styles.serviceTitle}>Design</h2>
              <p className={styles.serviceSubtitle}>Visual identity + UI</p>

              <div className={styles.serviceBody}>
                <p>Design isn&apos;t decoration. It&apos;s how your business looks when it needs to compete.</p>

                {/* Placeholder for animated visual */}
                <div className={styles.designVisual}>
                  <p className={styles.placeholder}>[Animated visual placeholder - brighter shapes, Memphis energy]</p>
                </div>
              </div>
            </div>

            <div className={styles.serviceMeta}>
              <div className={styles.metaBox}>
                <h4>Timeline</h4>
                <p>Included in standard timeline</p>
              </div>
              <div className={styles.metaBox}>
                <h4>Pricing</h4>
                <p>Included in base price</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section id="strategy" className={styles.service}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <span className={styles.serviceNumber}>04</span>
              <h2 className={styles.serviceTitle}>Strategy</h2>
              <p className={styles.serviceSubtitle}>SEO + positioning</p>

              <div className={styles.serviceBody}>
                <p>
                  SEO isn&apos;t magic. It&apos;s research, execution, and measurement. Most businesses either ignore it entirely or hire someone who promises
                  &quot;first page rankings&quot; without explaining how they&apos;ll get there.
                </p>
                <p>Here&apos;s how we actually do it.</p>

                <h3>The research phase</h3>
                <p>
                  Before writing a single word, we research what people are actually searching for. Not what you think they&apos;re searching for — what Google&apos;s data says they&apos;re searching for.
                </p>
                <p>
                  We use SemRush to identify search volume, keyword difficulty, search intent, and related keywords. This tells us what content to create and how to structure it.
                </p>

                <h3>Why human writing, not AI</h3>
                <p>
                  We hire professional copywriters. Not ChatGPT. Google can detect AI-generated content. The tells: repetitive phrasing, generic structure, no real expertise.
                </p>
                <p>
                  Human writers interview the business, write with authority, use varied sentence structure, and include real examples. The difference shows up in rankings.
                </p>

                <h3>Technical SEO</h3>
                <p>
                  Content is what ranks. But technical SEO is what tells Google how to read and index that content.
                </p>
                <ul>
                  <li>Local JSON-LD schema for local businesses</li>
                  <li>Meta tags and Open Graph tags</li>
                  <li>Proper heading hierarchy (H1, H2, H3)</li>
                  <li>XML sitemap and robots.txt</li>
                  <li>Page speed optimization</li>
                </ul>

                <h3>The integrated approach</h3>
                <p>
                  SEO works when all three pieces work together: Research (SemRush tells you what to write about), Content (human writer produces something Google wants to rank),
                  and Technical setup (schema, meta tags, proper structure).
                </p>
                <p>Most agencies do 1 and 3 but phone in 2. We do all three properly.</p>
              </div>
            </div>

            <div className={styles.serviceMeta}>
              <div className={styles.metaBox}>
                <h4>Timeline</h4>
                <p>Initial setup: 1 week<br />Ongoing: monthly retainer</p>
              </div>
              <div className={styles.metaBox}>
                <h4>Pricing</h4>
                <p>Setup: +$500-1,500<br />Blog posts: $200-400 each</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to start?</h2>
          <p>
            Let&apos;s talk about what you need. No sales pitch, just a conversation about your business and whether this is a good fit.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  )
}
