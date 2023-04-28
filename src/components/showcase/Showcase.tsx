import styles from './styles.module.scss';
import { HashLink } from 'react-router-hash-link';

const ShowCase = () => {
  return (
    <section className={styles.section}>
      <h2>EXAMPLES</h2>
      <div>
        <ul>
          <li>
            <span>
              <div>01 / </div>
              <p><a href="https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features/buybot-gif-creator" target="_blank" rel="noopener noreferrer">Buybot GIF</a></p>
            </span>

            <section>Test</section>
          </li>
          <li>
            <span>
              <div>02 / </div>
              <p><a href="https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features/video-creation-tool" target="_blank" rel="noopener noreferrer">Video creation</a></p>
            </span>

            <section>Test</section>
          </li>
          <li>
            <span>
              <div>03 / </div>
              <p><a href="https://doc.doge-gpt.ai/doge-gpt/dogegpt-content-creation-suite/core-features/logo-generator" target="_blank" rel="noopener noreferrer">Logo creation</a></p>
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
  );
};

export default ShowCase;
