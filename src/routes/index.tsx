import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/LandingPage/Navbar'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <Navbar />
      <div>Hello</div>
    </>
  )
}
