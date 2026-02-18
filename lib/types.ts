export interface Project {
  _id: string
  title: string
  slug: { current: string }
  client: string
  category: string
  excerpt: string
  liveUrl?: string
  technologies: string[]
  coverImage?: string
  body?: unknown[]
  featured?: boolean
  order?: number
}

export interface Testimonial {
  _id: string
  quote: string
  author: string
  role?: string
}
