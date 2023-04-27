import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { HashLink } from 'react-router-hash-link'

const routes: { name: string; path: string }[] = [
  { name: 'HOME', path: '/' },
  { name: 'TEAM', path: '/team' },
  { name: 'COMMUNITY', path: '/#community' },
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
    routes.map((e, i) => {
      if (e.path.includes('/#')) {
        return (
          <HashLink
            key={i}
            className={underlineCurrentLink(e.path) + 'underline_link'}
            onClick={() => setDropDownState(false)}
            smooth
            to={e.path}>
            {'</A> '} {e.name}
          </HashLink>
        )
      }
      return (
        <Link
          key={i}
          onClick={() => setDropDownState(false)}
          className={underlineCurrentLink(e.path) + 'underline_link'}
          to={e.path}>
          {'</A>'} {e.name}
        </Link>
      )
    })
  return (
    <header
      className={
        'text-white flex items-center font-RobotoMono justify-start p-7 md:pl-20 sm:pl-10 text-sm '
      }>
      <Link to={'/'} className={'font-light flex items-center text-[18px] font-Roboto fixed z-10'}>
        <img width={'35px'} src={Logo} alt={'logo'} />
        <p className={'font-[400] font-RobotoMono'}>&nbsp;DogeGPT</p>
      </Link>
      <nav
        className={`transition duration-200 all w-full flex items-center xl:items-start mt-[690px] -ml-[40px] md:-ml-[80px] xl:ml-0 ${
          showDropDown ? 'h-[110vh] opacity-100' : 'opacity-0'
        } xl:flex xl:mt-0 xl:h-full xl:opacity-100 xl:static fixed w-full xl:justify-center xl:bg-transparent bg-black`}>
        <div
          className={`xl:w-[1000px] ${
            showDropDown ? 'flex' : 'hidden'
          }  xl:flex xl:ml-0 ml-8 xl:text-base w-[200px] transition-all text-[18px] h-72 xl:h-fit justify-between flex-col xl:flex-row`}>
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
