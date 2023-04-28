import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './styles.module.scss'

const TermsOfUse: React.FC = () => {
  return (
    <>
      <span className={'fixed w-screen  z-[100000]'}>
        <Header />
      </span>
      <main className={'font-Roboto h-fit text-white pt-24 xl:ml-40 md:ml-20 ml-6 '}>
        <section className={'xl:h-32 h-24 xl:mb-0 mb-24 flex flex-col justify-between '}>
          <h1 className={'xl:text-7xl text-5xl font-[600]'}>Terms Of Use</h1>
          <p className={'xl:text-xl font-RobotoMono font-[500]'}>EFFECTIVE: MARCH 15, 2022</p>
        </section>

        <section className={'flex flex-col xl:items-end items-start'}>
          <section className={styles.section}>
            <div>
<p>Welcome to DogeGPT, a content creation platform designed for the DeFi community. By accessing or using our platform, you agree to be bound by the following terms of use. If you do not agree to these terms, please do not use our platform.</p>
<p>Acceptable Use</p>
<p>You agree to use the DogeGPT platform only for lawful purposes and in a manner consistent with these terms of use. You must not use our platform:</p>
<ul>
  <li>In any way that breaches any applicable law or regulation</li>
  <li>In any way that is fraudulent, deceptive, or misleading</li>
  <li>To transmit or facilitate the distribution of unsolicited or unauthorized advertising, spam, or promotional materials</li>
  <li>To impersonate or attempt to impersonate DogeGPT, a DogeGPT employee, or any other person or entity</li>
  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of our platform</li>
</ul>
<p>Intellectual Property</p>
<p>The DogeGPT platform and its contents, including all intellectual property rights, are the property of DogeGPT or its licensors. You may not reproduce, distribute, modify, or otherwise use any part of our platform without our prior written consent.</p>
<p>Limitation of Liability</p>
<p>DogeGPT is not liable for any damages, including but not limited to direct, indirect, incidental, consequential, or punitive damages, arising out of your use of our platform. We make no warranty or representation, express or implied, regarding the accuracy, completeness, reliability, or suitability of the platform.</p>
<p>Indemnification</p>
<p>You agree to indemnify and hold harmless DogeGPT, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your use of our platform.</p>
<p>Termination</p>
<p>We may terminate or suspend your access to our platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these terms of use.</p>
<p>Modifications</p>
<p>We reserve the right to modify these terms of use at any time without prior notice. By continuing to use our platform after any such modification, you agree to be bound by the updated terms of use.</p>
<p>Governing Law</p>
<p>These terms of use and your use of our platform are governed by and construed in accordance with the laws of [Insert governing law]. Any disputes arising out of or relating to these terms of use or our platform shall be resolved exclusively in the courts of The United States.</p>
<p>If you have any questions or concerns regarding these terms of use, please contact us at support@doge-gpt.ai</p>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TermsOfUse
