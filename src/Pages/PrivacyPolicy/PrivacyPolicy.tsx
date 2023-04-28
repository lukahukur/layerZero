import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './styles.module.scss'

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <span className={'fixed w-screen  z-[100000]'}>
        <Header />
      </span>
      <main className={'font-Roboto h-fit text-white pt-24 xl:ml-40 md:ml-20 ml-6 '}>
        <section className={'xl:h-32 h-24 xl:mb-0 mb-24 flex flex-col justify-between '}>
          <h1 className={'xl:text-7xl text-5xl font-[600]'}>Privacy Policy</h1>
          <p className={'xl:text-xl font-RobotoMono font-[500]'}>EFFECTIVE: MARCH 15, 2022</p>
        </section>

        <section className={'flex flex-col xl:items-end items-start'}>
          <section className={styles.section}>
            <div>
            <h2>Welcome to DogeGPT</h2>
<p>A content creation platform designed for the DeFi community. This privacy policy explains how we collect, use, and protect your personal information when you use our platform. By accessing or using our platform, you agree to the collection and use of your personal information as described in this privacy policy.</p>
<h2>Information We Collect</h2>
<p>We collect the following types of information:</p>
<ul>
    <li><strong>Personal Information:</strong> We may collect personal information such as your name, email address, and billing information when you register for our platform or make a purchase.</li>
    <li><strong>Usage Information:</strong> We may collect information about your use of our platform, including your IP address, browser type, device type, and operating system.</li>
    <li><strong>Cookies:</strong> We may use cookies to track your preferences and activities on our platform. You can disable cookies in your browser settings, but this may limit your use of some features of our platform.</li>
    <li><strong>Third-Party Analytics:</strong> We may use third-party analytics tools, such as Google Analytics, to collect information about your use of our platform.</li>
</ul>
<h2>How We Use Your Information</h2>
<p>We use your information for the following purposes:</p>
<ul>
    <li>To provide and improve our platform and services</li>
    <li>To communicate with you about your account, orders, and support requests</li>
    <li>To personalize your experience on our platform</li>
    <li>To analyze trends and usage patterns on our platform</li>
    <li>To comply with legal and regulatory requirements</li>
</ul>
<h2>How We Protect Your Information</h2>
<p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no data transmission over the internet or storage system can be guaranteed to be 100% secure.</p>
<h2>Sharing Your Information</h2>
<p>We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide you with advance notice and obtain your consent. We may share your information with third-party service providers who help us operate our platform or provide services to you.</p>
<h2>Your Choices</h2>
<p>You have the following choices regarding your personal information:</p>
<ul>
    <li>You can review and edit your personal information at any time by logging into your account on our platform.</li>
    <li>You can opt-out of receiving promotional emails from us by following the unsubscribe link in the email.</li>
    <li>You can request that we delete your personal information by contacting us at [Insert contact information]. Please note that we may be required to retain certain information for legal or regulatory purposes.</li>
</ul>
<h2>Changes to this Privacy Policy</h2>
<p>We may update this privacy policy from time to time by posting a new version on our platform. You should check this page occasionally to ensure that you are aware of any changes.</p>
<h2>Contact Us</h2>
<p>If you have any questions or concerns about this privacy policy, please contact us at <a href="mailto:support@doge-gpt.ai">support@doge-gpt.ai</a>.</p>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}
