import styles from './styles.module.scss'
const ShowCase = () => {
  return (
    <section className={styles.section}>
      <h2>EXAMPLES</h2>
      <div>
        <ul>
          <li>
            <div>01 / </div>
            <p>Buybot GIF</p>
          </li>
          <li>
            <div>02 / </div>
            <p>Video creation</p>
          </li>
          <li>
            <div>03 / </div>
            <p>Logo creation</p>
          </li>
        </ul>
        <div id={'community'}>DEVELOP WITH DOGEGPT</div>
      </div>
    </section>
  )
}

export default ShowCase
