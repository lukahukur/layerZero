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
              word: 'Develop with DogeGPT', /////// aqa chaaswore texti animaciisatviiiissss tooo
              tag: 'p',
              borderSize: 20
            })}
            {useWordsAnimation({
              direction: 'ltr',
              delay: 100,
              word: '', /////////// da aqaaaaaaaaaaaaaaaaaa
              tag: 'p',
              borderSize: 20
            })}
          </h1>
          <div>
            <p>DogeGPT provides users with a powerful AI-powered Content Creation Suite that enables the creation of high-quality logos, videos, and other promotional materials for DeFi projects quickly and easily.
</p>
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
                <a href="https://doc.doge-gpt.ai/doge-gpt/" target="_blank">
  <p>01 / </p> Introduction
</a>

                </h2>
                <span>
  <ArrowLinkComponent href={'https://doc.doge-gpt.ai/doge-gpt/introduction/background'} target='_blank' displayName={'Background'} />
  <ArrowLinkComponent href={'https://doc.doge-gpt.ai/doge-gpt/f.a.q'} target='_blank' displayName={'FAQ'} />
</span>

              </div>
            </li>
            <li>
              <span>
                <img className={styles.icons} src={Braces} alt="star" />
              </span>

              <div>
                <h2>
                <a href="https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features" target="_blank">
  <p>02 / </p> Core Features
</a>
                </h2>
                <span>
  <ArrowLinkComponent href={'https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features/logo-generator'} target='_blank' displayName={'Logo Generator'} />
  <ArrowLinkComponent href={'https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features/video-creation-tool'} target='_blank' displayName={'Video Creation'} />
  <ArrowLinkComponent href={'https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features/image-design-tool'} target='_blank' displayName={'Image Design'} />
  <ArrowLinkComponent href={'https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features/template-customizer'} target='_blank' displayName={'Template Customizer'} />

  <ArrowLinkComponent href={'https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features/telegram-banner-maker'} target='_blank' displayName={'Telegram Banner'} />

  <ArrowLinkComponent href={'https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features/buybot-gif-creator'} target='_blank' displayName={'Buybot GIF'} />
  <ArrowLinkComponent href={'https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features/content-scheduler'} target='_blank' displayName={'Content Scheduler'} />
</span>

              </div>
            </li>
            <li>
              <span>
                <img className={styles.icons} src={Crosshair} alt="star" />
              </span>

              <div>
                <h2>
                <a href="https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features/template-customizer " target="_blank">
  <p>03 / </p> Guides
</a>
                </h2>
                <span>
                  <ArrowLinkComponent href={''} displayName={'Tutorials (coming soon)'} />
                      </span>
              </div>
            </li>
            <li>
              <span>
                <img className={styles.icons} src={Star} alt="star" />
              </span>
              <div>
                <h2>
                <a href="https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features" target="_blank">
  <p>04 / </p> Troubleshooting
</a>
                </h2>
                <span>
                  <ArrowLinkComponent href={'mailto:support@doge-gpt.ai'} displayName={'Contact Us'} />
                  <ArrowLinkComponent href={'https://t.me/gptdoge'} displayName={'Join community'} />
              
                </span>
              </div>
            </li>
            <li>
              <span>
                <img className={styles.icons} src={Braces} alt="star" />
              </span>
              <div>
                <h2>
                <a href="https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features" target="_blank">
  <p>05 / </p> Examples
</a>
                </h2>
                <span>
                  <ArrowLinkComponent href={'/'} displayName={'Buybot example'} />
                  <ArrowLinkComponent href={'/'} displayName={'Video example'} />
                  <ArrowLinkComponent href={'/'} displayName={'Logo example'} />
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
            Join our Discord community today to receive fast help from our users 
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
