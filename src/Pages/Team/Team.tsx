import React from 'react'
import Footer from '../../components/Footer/Footer'
import useWordsAnimation from '../../Hooks/useWordsAnimation'
import styles from './styles.module.scss'
import Star from '../../assets/star.svg'
import Braces from '../../assets/braces.svg'
import Crosshair from '../../assets/crosshair.svg'
// import { Link } from 'react-router-dom'
import Arrow from '../../assets/Arrow.svg'

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
                <nav>
                  <img src={Arrow} alt="" />
                </nav>
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

export default Team
