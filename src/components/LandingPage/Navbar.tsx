import { Link } from '@tanstack/react-router'
import { Button } from '../ui/button'

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-8">
      <div>
        <Link to="/">Ai Workflow Gen</Link>
      </div>

      <nav>
        <Button size={'lg'} variant={'default'}>
          <Link to="/signup">Login</Link>
        </Button>
        <Button size={'lg'} variant={'ghost'}>
          <Link to="/signup">Sign Up</Link>
        </Button>
      </nav>
    </header>
  )
}
