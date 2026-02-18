import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getFeaturedProjects } from '@/sanity/lib/queries'

export const revalidate = 3600 // ISR: revalidate every hour

export default async function HomePage() {
  // Gracefully fall back if Sanity isn't configured yet
  let projects : any
  try {
    projects = await getFeaturedProjects()
  } catch {
    projects = []
  }

  return (
    <>
      <Nav />
      <main>
        <Hero projects={projects} />
        <Services />
        <Work projects={projects} />

        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}