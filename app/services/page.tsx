import Link from 'next/link'
import styles from './page.module.css'

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <div className="container">
          <h1 className={styles.pageTitle}>Services</h1>
          <p className={styles.pageLead}>
            Building a site isn't just technical work. It's an opportunity to define what your business stands for — and communicate it clearly. Here's how we do it.
          </p>
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
                <p>Custom-coded websites with no templates or page builders. Built in modern JavaScript frameworks or plain HTML — depending on what makes sense for your business.</p>
                
                <p>Most small businesses don't need WordPress. They need a fast, secure site that loads instantly, ranks well in Google, and doesn't require constant security updates. That's what custom code delivers.</p>

                <h3>What you get:</h3>
                <ul>
                  <li>Sites built in Next.js (for dynamic content) or plain HTML/CSS/JS (for simple brochure sites)</li>
                  <li>Hosted on Vercel or Netlify — lightning-fast global CDN, automatic SSL</li>
                  <li>Core Web Vitals optimized from day one (95+ Lighthouse scores)</li>
                  <li>Zero plugin vulnerabilities or maintenance overhead</li>
                  <li>Mobile-responsive, accessible, and performant</li>
                </ul>

                <h3>When to use Next.js vs plain HTML:</h3>
                <p><strong>Next.js:</strong> If you need a blog, frequent content updates, or integration with a CMS like Sanity. Offers dynamic routing, image optimization, and server-side rendering.</p>
                <p><strong>Plain HTML/CSS/JS:</strong> If you need a simple brochure site with a few pages. Faster, simpler, and cheaper to host.</p>
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
                <h4>What's included</h4>
                <ul>
                  <li>Responsive design</li>
                  <li>SEO-ready structure</li>
                  <li>Deployment & DNS setup</li>
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
                <p>Sanity CMS gives you a clean, structured editing experience built right into your site. Update copy, swap images, add blog posts, manage team members — no developer needed after launch.</p>
                
                <p>Pair it with professional copywriting that actually sounds like your business. I work with a trusted copywriter who understands how to write for the web — clear, concise, and strategic.</p>

                <h3>What you get:</h3>
                <ul>
                  <li>Custom Sanity CMS tailored to your content needs</li>
                  <li>Real-time editing with instant preview</li>
                  <li>Structured content that improves SEO</li>
                  <li>Professional copywriting for key pages</li>
                  <li>Ongoing blog content available (per-post basis)</li>
                </ul>

                <h3>Why Sanity over WordPress:</h3>
                <p>WordPress was built in 2003. Sanity is a modern, headless CMS that separates content from presentation. It's faster, more secure, and gives you way more control over how content is structured.</p>
              </div>
            </div>
            
            <div className={styles.serviceMeta}>
              <div className={styles.metaBox}>
                <h4>Timeline</h4>
                <p>CMS setup: 1 week<br/>Copywriting: 2-3 weeks</p>
              </div>
              <div className={styles.metaBox}>
                <h4>Pricing</h4>
                <p>CMS: +$500-1,000<br/>Copywriting: $150-300/page</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design */}
      <section id="design" className={styles.service}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <span className={styles.serviceNumber}>03</span>
              <h2 className={styles.serviceTitle}>Design</h2>
              <p className={styles.serviceSubtitle}>Visual identity + UI</p>
              
              <div className={styles.serviceBody}>
                <p>Cohesive visual systems that work across your site. Typography, color, layout — designed to represent your business accurately and compete with what's out there.</p>
                
                <p>Most small businesses don't have a design system. They have a logo someone made on Fiverr and inconsistent fonts. A website project is an opportunity to fix that — to actually decide what your brand looks and feels like.</p>

                <h3>What you get:</h3>
                <ul>
                  <li>Typography-first design that prioritizes readability</li>
                  <li>Color palette and visual hierarchy</li>
                  <li>Custom layouts (no generic templates)</li>
                  <li>Responsive design across all devices</li>
                  <li>Accessible interfaces that work for everyone</li>
                </ul>

                <h3>The process:</h3>
                <p>We start with a conversation about what your business actually does and who you're trying to reach. Then I create a design that reflects that — not what's trendy, but what's right for you.</p>
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
                <p>Keyword research via SemRush, competitive analysis, and technical SEO setup. Schema markup, meta tags, sitemap — the stuff that actually helps people find you.</p>
                
                <p>SEO isn't guesswork. It's research, structure, and execution. I use SemRush to identify what people are actually searching for, then build your site around that. Local businesses get JSON-LD schema markup so Google understands who you are and where you're located.</p>

                <h3>What you get:</h3>
                <ul>
                  <li>SemRush keyword research and competitive analysis</li>
                  <li>Strategic HTML structure (H1, H2, H3 hierarchy)</li>
                  <li>Local JSON-LD schema for local businesses</li>
                  <li>Meta tags, Open Graph tags, Twitter cards</li>
                  <li>XML sitemap and robots.txt setup</li>
                  <li>Page speed optimization</li>
                </ul>

                <h3>Ongoing SEO:</h3>
                <p>If you want ongoing blog content, I work with a professional copywriter who understands SEO. Posts are researched, keyword-optimized, and written to actually rank — not just fill space on your site.</p>
              </div>
            </div>
            
            <div className={styles.serviceMeta}>
              <div className={styles.metaBox}>
                <h4>Timeline</h4>
                <p>Initial setup: 1 week<br/>Ongoing: monthly retainer</p>
              </div>
              <div className={styles.metaBox}>
                <h4>Pricing</h4>
                <p>Setup: +$500-1,500<br/>Blog posts: $200-400 each</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to start?</h2>
          <p>Let's talk about what you need. No sales pitch, just a conversation about your business and whether this is a good fit.</p>
          <Link href="/#contact" className={styles.ctaButton}>
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  )
}