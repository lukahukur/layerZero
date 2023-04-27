import React from 'react'
import Footer from '../../components/Footer/Footer'
import useWordsAnimation from '../../Hooks/useWordsAnimation'
import styles from './styles.module.scss'
import Star from '../../assets/star.svg'
import Braces from '../../assets/braces.svg'
import Crosshair from '../../assets/crosshair.svg'
import Arrow from '../../assets/Arrow.svg'
import Header from '../../components/header/Header'

const Developers: React.FC = () => {
  return (
    <>
      <span className={'fixed w-screen  z-[100000]'}>
        <Header />
      </span>
      <main className={'w-full text-white pt-[65px]'}>
        <section className={styles.section1}>
          <h1>
            {useWordsAnimation({
              direction: 'ltr',
              delay: 50,
              word: 'Some cool text',
              tag: 'p',
              borderSize: 20
            })}
            {useWordsAnimation({
              direction: 'ltr',
              delay: 100,
              word: 'About DogeGPT ',
              tag: 'p',
              borderSize: 20
            })}
          </h1>
          <div>
            <p>LAYERZERO ENABLES DEVELOPERS TO SEND SECURE MESSAGES ACROSS BLOCKCHAINS.</p>
          </div>
        </section>
        <div className={'mr-32'}>
          <ul className={styles.blocks}>
            <li>
              <span>
                <img className={styles.icons} src={Star} alt="star" />
              </span>

              <div>
                <h2>
                  <p>01 / </p> Introduction
                </h2>
                <span>
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                </span>
              </div>
            </li>
            <li>
              <span>
                <img className={styles.icons} src={Braces} alt="star" />
              </span>

              <div>
                <h2>
                  <p>02 / </p> Introduction
                </h2>
                <span>
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                </span>
              </div>
            </li>
            <li>
              <span>
                <img className={styles.icons} src={Crosshair} alt="star" />
              </span>

              <div>
                <h2>
                  <p>03 / </p> Introduction
                </h2>
                <span>
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                </span>
              </div>
            </li>
            <li>
              <span>
                <img className={styles.icons} src={Star} alt="star" />
              </span>
              <div>
                <h2>
                  <p>04 / </p> Introduction
                </h2>
                <span>
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                </span>
              </div>
            </li>
            <li>
              <span>
                <img className={styles.icons} src={Braces} alt="star" />
              </span>
              <div>
                <h2>
                  <p>05 / </p> Introduction
                </h2>
                <span>
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                </span>
              </div>
            </li>
            <li>
              <span>
                <img className={styles.icons} src={Crosshair} alt="star" />
              </span>
              <div>
                <h2>
                  <p>06 / </p> Introduction
                </h2>
                <span>
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                  <ArrowLinkComponent href={'/'} displayName={'FAQ'} />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}

const ArrowLinkComponent: React.FC<{
  href: string
  displayName: string
}> = ({ displayName, href }) => {
  return (
    <a href={href} className={'font-RobotoMono text-neutral-500 flex items-center w-fit h-[22px]'}>
      <img style={{ width: '20px' }} src={Arrow} alt="arrow" className={'mr-3'} />
      <p>{displayName}</p>
    </a>
  )
}
export default Developers
