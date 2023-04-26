// import Header from '../header/Header'
import styles from './style.module.scss'

import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <main className={'h-screen text-white pt-14 font-Roboto flex flex-col justify-between'}>
        <div className={styles.words}>
          <section>
            <h1>
              <p>Content</p>
              <p>Creation</p>
              <p>Suite (CSS)</p>
            </h1>
            <div className={'font-RobotoMono  flex flex-col items-end px-40 text-justify'}>
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
            <div className={'bg-white h-14 w-96 font-bold flex items-center justify-center'}>
              <Link to={'dogegpt'}>DEVELOP WITH DOGEGPT</Link>
            </div>
          </div>
          <div className={'h-14 flex items-center justify-center'}>
            <Link to={'dogegpt'}>{'</A>'} WHITEPAPER</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Main
