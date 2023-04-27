import React from 'react'
import Footer from '../../components/Footer/Footer'
import useWordsAnimation from '../../Hooks/useWordsAnimation'
import styles from './styles.module.scss'
import Star from '../../assets/star.svg'
import Braces from '../../assets/braces.svg'
import Crosshair from '../../assets/crosshair.svg'
import Arrow from '../../assets/Arrow.svg'
import Header from '../../components/header/Header'
import Discord from '../../assets/discord.svg'

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
              word: 'Some cool text', /////// aqa chaaswore texti animaciisatviiiissss tooo
              tag: 'p',
              borderSize: 20
            })}
            {useWordsAnimation({
              direction: 'ltr',
              delay: 100,
              word: 'About DogeGPT ', /////////// da aqaaaaaaaaaaaaaaaaaa
              tag: 'p',
              borderSize: 20
            })}
          </h1>
          <div>
            <p>LAYERZERO ENABLES DEVELOPERS TO SEND SECURE MESSAGES ACROSS BLOCKCHAINS.</p>
          </div>
        </section>
        <div className={'xl:mr-32 md:mr-24 sm:mr-20 mr-5'}>
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
      <div
        className={`h-screen w-full flex items-start 
           lg:justify-center lg:pl-0 jsutify-start  sm:pr-20 px-5
           `}>
        <div
          className={`bg-neutral-900 lg:w-1/2 md:w-2/3 w-full h-[550px] text-white font-Roboto 
                         flex items-center justify-between flex-col xl:py-16 py-10 px-3
                      `}>
          <div className={'text-center'}>
            <h2 className={'xl:text-5xl md:text-4xl  text-3xl  font-bold mb-7'}>
              Solve Technical Questions quickly
            </h2>
            <p className={'font-RobotoMono xl:px-[100px] md:text-base text-sm'}>
              DISCORD DEVELOPER COMMUNITY SPANS ALL ACROSS THE GLOBE. SHARE YOUR IDEAS, AND BUILD
              WITHOUT LIMITS.
            </p>
          </div>

          <div className={'flex flex-col  h-40 items-center justify-between'}>
            <img style={{ width: '70px' }} src={Discord} alt="" />
            <div className={'flex flex-col items-center justify-center'}>
              <h2 className={'text-[30px] font-bold'}>Discord Community</h2>
              <div className={'bg-white mt-4 p-2'}>
                <a
                  href="/"
                  className={'underline_link_black text-black font-RobotoMono font-[500] '}>
                  {'</A>'} Join Discussion
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
