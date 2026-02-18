'use client'

import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className="mono">Get in touch</p>
            <h2 className={styles.title}>
              Ready to build<br />
              something fast?
            </h2>
            <p className={styles.sub}>
              Tell me about your project. I'll respond within one business day.
              All projects start with a free 30-minute discovery call.
            </p>

            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Location</span>
                <span>New York City</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Availability</span>
                <span className={styles.available}>Open to new projects</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Response time</span>
                <span>Within 1 business day</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            {status === 'sent' ? (
              <div className={styles.success}>
                <p className={styles.successIcon}>✓</p>
                <p className={styles.successTitle}>Message received.</p>
                <p className={styles.successSub}>I'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="type">Project type</label>
                    <select id="type" name="type" value={form.type} onChange={handleChange}>
                      <option value="">Select one</option>
                      <option value="new-site">New website</option>
                      <option value="rebuild">Rebuild / redesign</option>
                      <option value="seo">SEO & content</option>
                      <option value="cms">CMS integration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="budget">Budget range</label>
                    <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                      <option value="">Select one</option>
                      <option value="under-2k">Under $2,000</option>
                      <option value="2k-4k">$2,000–$4,000</option>
                      <option value="4k-6k">$4,000–$6,000</option>
                      <option value="6k-plus">$6,000+</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Tell me about the project</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you building? What's the current situation? Any timeline?"
                  />
                </div>

                {status === 'error' && (
                  <p className={styles.error}>
                    Something went wrong. Email me directly instead.
                  </p>
                )}

                <button type="submit" className={styles.submit} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
