import Head from 'next/head'
import Image from 'next/image'
import church from '../assets/churchp.png';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.stjoseph__header} id = "home" >
      <div className={styles.stjoseph__header_content}>
        <h1 className={styles.gradient__text}>“Everything should be done in love.” — 1 Corinthians 16:14</h1>
        <p>Welcome to the official website of the St. Joseph’s Metropolitan Cathedral, Trivandrum, Kerala. The
          St. Joseph’s Cathedral located at Palayam is an ancient church in India where believers from far and
          wide flock to receive heavenly blessings.
        </p>
        <div className={styles.stjoseph__header_content__input}>
          <button type='button'>For Queries</button>
        </div>

      </div>
      <div className={styles.stjoseph__header_image}>
        <Image src={church}  alt="Picture of the author"
      width="350px"
      height="300px"/>

      </div>
    </div >
  )
}
