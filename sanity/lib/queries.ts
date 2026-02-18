import { client } from './client'
import { Project, Testimonial } from '@/lib/types'

export async function getFeaturedProjects(): Promise<Project[]> {
  return client.fetch(
    `*[_type == "project" && featured == true] | order(order asc) {
      _id,
      title,
      slug,
      client,
      category,
      excerpt,
      liveUrl,
      technologies,
      "coverImage": coverImage.asset->url
    }`
  )
}

export async function getAllProjects(): Promise<Project[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc) {
      _id,
      title,
      slug,
      client,
      category,
      excerpt,
      liveUrl,
      technologies,
      "coverImage": coverImage.asset->url
    }`
  )
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      client,
      category,
      excerpt,
      liveUrl,
      technologies,
      body,
      "coverImage": coverImage.asset->url
    }`,
    { slug }
  )
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial" && featured == true] {
      _id,
      quote,
      author,
      role
    }`
  )
}
