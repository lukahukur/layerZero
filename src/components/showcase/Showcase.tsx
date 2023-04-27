import styles from './styles.module.scss'
import { HashLink } from 'react-router-hash-link'
const ShowCase = () => {
  return (
    <section className={styles.section}>
      <h2>EXAMPLES</h2>
      <div>
        <ul>
          <li>
            <span>
              <div>01 / </div>
              <p>Buybot GIF</p>
            </span>

            <section>Test</section>
          </li>
          <li>
            <span>
              <div>02 / </div>
              <p>Video creation</p>
            </span>

            <section>Test</section>
          </li>
          <li>
            <span>
              <div>03 / </div>
              <p>Logo creation</p>
            </span>

            <section>Test</section>
          </li>
        </ul>
        <div>
          <HashLink to={'/developers#'} className={'underline_link_black'} id={'community'}>
            DEVELOP WITH DOGEGPT
          </HashLink>
        </div>
      </div>
    </section>
  )
}

export default ShowCase
