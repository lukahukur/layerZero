import React from 'react'
import Footer from '../../components/Footer/Footer'
import useWordsAnimation from '../../Hooks/useWordsAnimation'
import styles from './styles.module.scss'
import Star from '../../assets/star.svg'
import Braces from '../../assets/braces.svg'
import Crosshair from '../../assets/crosshair.svg'
import { Link } from 'react-router-dom'

const Team: React.FC = () => {
  return (
    <>
      <main className={'w-full text-white pt-[65px]'}>
        <section className={styles.section1}>
          <h1>
            {useWordsAnimation({
              direction: 'ltr',
              delay: 50,
              word: 'Some cool text',
              tag: 'p'
            })}
            {useWordsAnimation({
              direction: 'ltr',
              delay: 100,
              word: 'About DogeGPT ',
              tag: 'p'
            })}
          </h1>
          <div>
            <p>LAYERZERO ENABLES DEVELOPERS TO SEND SECURE MESSAGES ACROSS BLOCKCHAINS.</p>
          </div>
        </section>
        <div className={'mr-32'}>
          <section className={styles.blocks}>
            <div>
              <div>
                <img src={Star} alt="star" />
              </div>

              <div></div>
            </div>
            <div>
              <div>
                <img src={Braces} alt="star" />
              </div>

              <div>
                <p>01 / Introduction</p>
                <nav></nav>
              </div>
            </div>
            <div>
              <div>
                <img src={Crosshair} alt="star" />
              </div>

              <div></div>
            </div>
            <div>
              <div>
                <img src={Star} alt="star" />
              </div>

              <div></div>
            </div>
            <div>
              <div>
                <img src={Braces} alt="star" />
              </div>

              <div></div>
            </div>
            <div>
              <div>
                <img src={Crosshair} alt="star" />
              </div>

              <div></div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

const Arrow = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 10">
    <path
      d="M16.4714 5.4714c.2604-.26035.2604-.68245 0-.9428L12.2288.285954c-.2604-.2603488-.6825-.2603488-.9428 0-.2604.26035-.2604.68246 0 .942806L15.0572 5 11.286 8.77124c-.2604.26035-.2604.68246 0 .94281.2603.26034.6824.26034.9428 0l4.2426-4.24265ZM0 5.66667h16V4.33333H0v1.33334Z"
      className={'fill-neutral-600'}></path>
  </svg>
)

export default Team
