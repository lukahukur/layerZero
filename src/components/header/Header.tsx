import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const routes: { name: string; path: string }[] = [
  { name: 'HOME', path: '/' },
  { name: 'TEAM', path: '/team' },
  { name: 'COMMUNITY', path: '/community' },
  { name: 'DOGEGPT', path: '/dogegpt' },
  { name: 'dApp', path: '/dApp' }
]

const Header = () => {
  const path = useLocation()

  const [showDropDown, setDropDownState] = useState(false)
  const underlineCurrentLink = (pathName: string) => {
    return pathName === path.pathname ? 'xl:border-b border-b-white' : ''
  }
  const routeMap = () =>
    routes.map((e) => (
      <Link
        onClick={() => setDropDownState(false)}
        className={underlineCurrentLink(e.path)}
        to={e.path}>
        {'</A>'} {e.name}
      </Link>
    ))
  return (
    <header className={'text-white flex  font-RobotoMono justify-start p-7 text-sm '}>
      <div className={'font-light fixed z-10'}>LOGO</div>
      <nav
        className={`w-full h-full items-center xl:items-start -ml-7 -mt-7 xl:ml-0 ${
          showDropDown ? 'flex' : 'hidden'
        } xl:flex xl:mt-0 xl:static fixed w-full xl:justify-center xl:bg-transparent bg-black`}>
        <div
          className={
            'xl:w-[1000px] xl:ml-0 ml-8 xl:text-base w-[200px] text-[18px] h-72 xl:h-fit flex justify-between flex-col xl:flex-row'
          }>
          {routeMap()}
        </div>
      </nav>
      <button
        onClick={() => setDropDownState((e) => !e)}
        className={
          'w-7 h-5 text-red-500 sticky left-[95%] xl:hidden flex flex-col justify-between'
        }>
        <span className={'h-[1px] w-full block bg-white'}></span>
        <span className={'h-[1px] w-full block bg-white'}></span>
        <span className={'h-[1px] w-full block bg-white'}></span>
      </button>
    </header>
  )
}

export default Header
