import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import Star from '../../assets/star.svg'
import Braces from '../../assets/braces.svg'
import Crosshair from '../../assets/crosshair.svg'
import Msg from '../../assets/msg.png'
import Logo from '../../assets/logo.png'

const links: { name: string; link: string }[] = [
  { name: 'TELEGRAM', link: '/' },
  { name: 'Discord', link: '/' },
  { name: 'Twitter', link: '/' },
  { name: 'Medium', link: '/' },
  { name: 'DogeGPT', link: '/' },
  { name: 'Developers', link: '/' },
  { name: 'About', link: '/' }
]
const Footer = () => {
  return (
    <div className={styles.section5}>
      <div className={'w-full flex items-center justify-center'}>
        <nav>
          <ul>
            {links.map((e, i) => (
              <Link to={e.link} key={i}>
                {'</A>'}
                {e.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      <div className={'w-full flex items-center justify-center xl:ml-30'}>
        <section className={'w-[85%]'}>
          <ul className={'grid 2xl:grid-cols-3 grid-cols-2 h-[400px]'}>
            <li>
              <Link to={'https://doc.doge-gpt.ai/'} target="_blank">
                <img src={Star} alt="star" />
                <h2>INTRODUCTION</h2>
              </Link>
            </li>
            <li>
              <Link
                to={'https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite'}
                target="_blank">
                <img src={Braces} alt="braces" />
                <h2>DogeGPT(CCS)</h2>
              </Link>
            </li>
            <li>
              <Link to={'https://doc.doge-gpt.ai/doge-gpt/dogegpt-tokenomics'} target="_blank">
                <img src={Crosshair} alt="crosshair" />
                <h2>Tokenomics</h2>
              </Link>
            </li>
            <li>
              <Link to={'https://doc.doge-gpt.ai/doge-gpt/roadmap'} target="_blank">
                <img src={Star} alt="crosshair" />
                <h2>Roadmap</h2>
              </Link>
            </li>
            <li>
              <Link to={'https://doc.doge-gpt.ai/doge-gpt/team-and-advisors'} target="_blank">
                <img src={Braces} alt="crosshair" />
                <h2>Team/Advisor</h2>
              </Link>
            </li>
            <li>
              <Link to={'https://doc.doge-gpt.ai/doge-gpt/legal-and-compliance'} target="_blank">
                <img src={Crosshair} alt="crosshair" />
                <h2>Legal Compliance</h2>
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <div className={'flex flex-col items-center w-full h-32'}>
        <div className={'border-b border-zinc-700 w-[85%] font-RobotoMono justify-end'}>
          <div className={'mb-2'}>
            <div>Terms Of Use</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
          </div>
        </div>
        <div className={'h-32 w-[85%] flex justify-between items-center text-sm'}>
          <div>
            @{new Date().getFullYear()} <p>&nbsp; DogeGPT</p>
          </div>
          <div>
            <img src={Msg} alt={'message icon'} />
            <p> Contact Us</p>
          </div>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
