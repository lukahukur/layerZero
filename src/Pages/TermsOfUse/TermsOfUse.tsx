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
              <h2>Introduction</h2>
              <p>
                LayerZero Labs Ltd. (“LayerZero”) is committed to protecting and respecting your
                privacy. This Privacy Policy describes how your personal or behavioral data is
                collected, used and stored when you access https://layerzero.network/ (the “Site”).
                This Privacy Policy may be modified from time to time which will be indicated by
                changing the date at the top of this page. Your use of the Site is at all times
                subject to the Terms of Service, which incorporates this Privacy Policy.
              </p>
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>Acceptance of the Privacy Policy</h2>
              <p>
                By accessing the Site, you signify acceptance to the terms of this Privacy Policy.
                Where required by law, you will be asked for your consent to the collection and use
                of your information as described further below. Additional "just-in-time"
                disclosures or information about the data processing practices of specific services
                may be provided. These notices may supplement or clarify the privacy practices
                applicable to the Site or may provide you with additional choices about how your
                data is processed. If you do not agree with or you are not comfortable with any
                aspect of this Privacy Policy, you should immediately discontinue access or use of
                the Site. You may only access the Site if you are above the age of majority in your
                jurisdiction of residence.
              </p>
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>The Information We Collect</h2>
              <p>
                LayerZero does not collect your personal information and does not use any automatic
                tracking technologies. LayerZero does not collect personal information. You are not
                required to provide any personal information to the Site. However, the transactions
                conducted from your wallets are publicly accessible on blockchain networks access
                through the Site. LayerZero does not track IP addresses. Where third parties collect
                IP addresses by default: (1) manual removal of IP tracking is requested, and (2) IP
                data is anonymization to prevent product analytics services from receiving IP data.
                Google analytics is used on the Site. LayerZero uses Google Analytics for purposes
                of monitoring action on the Site. All IP addresses are anonymized. LayerZero does
                not store message data. LayerZero does not store personal or message information or
                in any way use information to associate or cross-associate wallet data is not
                possible. Do Not Track policy. Some Internet browsers include the ability to
                transmit "Do Not Track" or "DNT" signals. Since uniform standards for "DNT" signals
                have not been adopted, the Site does not currently process or respond to "DNT"
                signals.
              </p>
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>Use USAGE DATA</h2>
              <p>
                LayerZero collects anonymous usage information to improve the UX. To protect your
                privacy, we collect no personal information and collect as little use information as
                possible.
              </p>
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>Sharing of the Personal Information</h2>
              <p>
                We do not share or sell the personal information that you provide us with other
                organizations without your express consent, except as described in this Privacy
                Policy.
              </p>
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>How we Protect and Store Information</h2>
              <p>
                The safety and security of your personal information also depends on you.
                Unauthorized entry or use, hardware or software failure, and other factors, may
                compromise the security of user information at any time. We seek to protect personal
                information by refraining from collecting personal information where possible.
                However, these measures do not guarantee that your personal information will not be
                accessed, disclosed, altered or destroyed by breach of such firewalls and secure
                server software. By using the Site, you acknowledge that you understand and agree to
                assume these risks.
              </p>
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>International Transfers OF PERSONAL DATA</h2>
              <p>
                If you are a resident of the European Economic Area (“EEA”) or Switzerland, you may
                have additional rights under the General Data Protection Regulation (the “GDPR”) and
                other applicable law with respect to your Personal Data, as outlined below. For this
                section, we use the terms “Personal Data” and “processing” as they are defined in
                the GDPR, but “Personal Data” generally means information that can be used to
                individually identify a person, and “processing” generally covers actions that can
                be performed in connection with data such as collection, use, storage and
                disclosure. LayerZero will be the controller of your Personal Data processed in
                connection with the Site.
              </p>
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>Social Media</h2>
              <p>
                We use social and developer networks such as Discord, Twitter, Gitbook and Github.
                When you use them, the operators of the respective social and developer networks and
                may record that you are on such networks. This processing of your personal data lays
                in the responsibility of these networks and occurs according to their privacy
                policy. Please check with these individual social and developer networks regarding
                their privacy policies. LayerZero is not responsible for data collected by these
                networks. We only use these platforms to inform our community of updates and answer
                user questions.
              </p>
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>What Personal Data Do We Collect from You?</h2>
              <p>
                We collect no personal data from you. Please see the section “The Information We
                Collect” for further details.
              </p>
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>What If You Have Questions Regarding Your Personal Data?</h2>
              <p>
                If you have any questions about this section or our data practices generally, please
                contact notices@layerzero.network.
              </p>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TermsOfUse
