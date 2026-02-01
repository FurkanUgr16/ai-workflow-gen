import { Link, useNavigate } from '@tanstack/react-router'
import { Button } from '../ui/button'
import { authClient } from '@/lib/auth-client'

export const Navbar = () => {
  const navigate = useNavigate()
  const { data: session } = authClient.useSession()

  const logout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: '/login' })
        },
      },
    })
  }

  return (
    <header className="flex items-center justify-around p-8">
      <div>
        <Link to="/">Ai Workflow Gen</Link>
      </div>

      <nav className="flex items-center gap-2">
        {session ? (
          <Button variant={'destructive'} onClick={logout}>
            Sign Out
          </Button>
        ) : (
          <>
            <div>
              <Button size={'lg'} variant={'default'}>
                <Link to="/login">Login</Link>
              </Button>
            </div>
            <div>
              <Button size={'lg'} variant={'ghost'}>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
