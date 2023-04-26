// import Header from '../header/Header'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import Star from '../../assets/star.svg'
import Crosshair from '../../assets/crosshair.svg'
import Braces from '../../assets/braces.svg'
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
const Main = () => {
  return (
    <div>
      <main className={'h-screen text-white pt-14 font-Roboto flex flex-col justify-between'}>
        <div className={styles.section1}>
          <section>
            <h1>
              <p>Content</p>
              <p>Creation</p>
              <p>Suite (CCS)</p>
            </h1>
            <div
              className={
                'font-RobotoMono  flex flex-col items-end xl:px-40 md:px-24   text-justify'
              }>
              <p>INTRODUCING DOGEGPT UNLEASHING THE COSMIC</p>
              <span className={'mt-4'}>
                <p>
                  POWER OF MEME MAGIC AND CUTTING-EDGE AI, DOGEGPT IS SET TO REVOLUTIONIZE THE DEFI
                  UNIVERSE BY CONJURING UP ANARSENAL OF MIND-BENDING LOGOS, MESMERIZING VIDEOS, AND
                  OUT-OF-THIS-WORLD TEMPLATES THAT'LL LEAVE PROJECTS BARKING FOR MORE
                </p>
              </span>
            </div>
          </section>
        </div>
        <div className={'flex flex-col font-RobotoMono'}>
          <div className={'text-black  flex justify-center'}>
            <div
              className={
                'bg-white w-[80%] text-[12px] xl:text-base h-14 lg:w-96 font-bold flex items-center justify-center mb-1 xl:mb-0 xl:mt-12'
              }>
              <Link to={'dogegpt'}>DEVELOP WITH DOGEGPT</Link>
            </div>
          </div>
          <div className={'h-14 xl:text-base text-[12px] flex  items-center justify-center'}>
            <Link to={'dogegpt'}>{'</A>'} WHITEPAPER</Link>
          </div>
        </div>
      </main>
      <div className={styles.section2}>
        <section>
          <h2>Core Concept of DogeGPT</h2>

          <div>
            <p>
              DogeGPT is a groundbreaking content creation platform tailored to the
              DeFi community,which leverages state-of-the-art AI technology to generate high-quality
              marketing materials with ease. The platform empowers developers and marketers to
              create a variety of content, including logos, promotional videos, images, and
              optimized templates through simple promptinputs. By combining the power of AI with
              user-friendly tools, DogeGPT aims to revolutionize  content creation for DeFi projects
              and streamline their marketing efforts.
            </p>
          </div>
        </section>
      </div>
      <div className={styles.section3}>
        <section>
          <div>
            <span>
              <p>Decentralized</p> <p>-</p> <p>TRUSTLESS,</p>
            </span>
            <span>
              <p>CSS</p> <p>INTEROPERABILITY</p>
            </span>
          </div>

          <div className={'mt-1 mb-3'}>
            <h2>Developing  DogeGPT</h2>
          </div>
          <div>
            <p>
              DogeGPT is built using a combination of Solidity, JavaScript  (including React and
              Vue.js),Python (including TensorFlow and PyTorch),  HTML/CSS, Web3.js, and Node.js to
              create apowerful and user-friendly  content creation suite that leverages AI
              technology to revolutionize  marketing efforts in the DeFi space
            </p>
          </div>
        </section>
      </div>
      <div className={'h-screen text-white  '}>
        <Layers />
      </div>
      <div className={styles.section4}>
        <section>
          <h2>EXAMPLES</h2>
          <div>
            <ul>
              <li>
                <div>01 / </div>
                <p>Buybot GIF</p>
              </li>
              <li>
                <div>02 / </div>
                <p>Video creation</p>
              </li>
              <li>
                <div>03 / </div>
                <p>Logo creation</p>
              </li>
            </ul>
            <div>DEVELOP WITH DOGEGPT</div>
          </div>
        </section>
        <nav>
          <ul>
            {links.map((e) => (
              <Link to={e.link}>
                {'</A>'}
                {e.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.section5}>
        <div className={'w-full flex items-center justify-center xl:ml-30'}>
          <section className={'w-[85%]'}>
            <ul className={'grid 2xl:grid-cols-3 grid-cols-2 h-[400px]'}>
              <li>
                <img src={Star} alt="star" />
                <h2>INTRODUCTION</h2>
              </li>
              <li>
                <img src={Braces} alt="braces" />
                <h2>DogeGPT(CCS)</h2>
              </li>
              <li>
                <img src={Crosshair} alt="crosshair" />
                <h2>Tokenomics</h2>
              </li>
              <li>
                <img src={Star} alt="crosshair" />
                <h2>Roadmap</h2>
              </li>
              <li>
                <img src={Braces} alt="crosshair" />
                <h2>Team/Advisor</h2>
              </li>
              <li>
                <img src={Crosshair} alt="crosshair" />
                <h2>Legal Compliance</h2>
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
    </div>
  )
}

const Layers = () => {
  return (
    <div className={styles.layers}>
      <div>
        <span
          className={
            'sticky z-[1000] -mb-16 h-[44px] w-fit h-fit block left-[100%] bottom-[460px]'
          }>
          <span className="border relative xl:w-[35px] xl:h-[39px] w-[30px] h-[34px] border block bg-black left-11" />
          <span
            className="border relative xl:w-[35px] xl:h-[39px] w-[30px] h-[35px] border block
                           bg-black xl:bottom-12 xl:right-4 bottom-10 left-9"
          />
        </span>
        <p>
          To build the DogeGPT platform, we have used a combination of coding languages and
          frameworks, including
        </p>
        <ul>
          <li>
            Solidity: As a smart contract programming language, Solidity is the backbone of
            our tokenomics and incentive mechanisms. It allows us to develop secure and transparent
             smart contracts that facilitate the distribution and management of DogeGPT tokens.
          </li>
          <li>
            JavaScript: JavaScript is a widely used programming language that is essential for
            building the front-end of the DogeGPT platform. We will be utilizing JavaScript
            frameworks such as React and Vue.js to create a responsive and intuitive user interface.
          </li>
          <li>
            Python: Python is a versatile programming language that will be crucial in developing
             the advanced AI algorithms that power DogeGPT's content creation suite. We will be
            using libraries such as TensorFlow and PyTorch to build and train the AI models.
          </li>
          <li>
            HTML/CSS: HTML and CSS are fundamental languages used to build websites and design
            web pages. We will be using these languages to structure the DogeGPT website and create
            visually appealing templates. Web3.js: Web3.js is a JavaScript library that allows us to
            interact with the Ethereum  blockchain and integrate DogeGPT with other DeFi platforms.
          </li>
          <li>
            Node.js: Node.js is a popular JavaScript runtime that enables server-side programming.
             We will be using Node.js to develop and deploy the back-end of the DogeGPT platform.
          </li>
        </ul>
      </div>
      <div />
      <div />
    </div>
  )
}

export default Main
