import { Link, useLocation } from 'react-router-dom'

const routes: { name: string; path: string }[] = [
  { name: 'HOME', path: '/' },
  { name: 'TEAM', path: '/team' },
  { name: 'COMMUNITY', path: '/community' },
  { name: 'DOGEGPT', path: '/dogegpt' },
  { name: 'dApp', path: '/dApp' }
]

const Header = () => {
  const path = useLocation()
  const underlineCurrentLink = (pathName: string) => {
    return pathName === path.pathname ? 'border-b border-b-white' : ''
  }
  const routeMap = () =>
    routes.map((e) => (
      <Link className={underlineCurrentLink(e.path)} to={e.path}>
        {'</A>'} {e.name}
      </Link>
    ))
  return (
    <header className={'text-white font-RobotoMono flex justify-start p-7'}>
      <div className={'font-light'}>LOGO</div>
      <nav className={'w-full flex justify-center'}>
        <div className={'w-[1000px] flex justify-between '}>{routeMap()}</div>
      </nav>
    </header>
  )
}

export default Header
