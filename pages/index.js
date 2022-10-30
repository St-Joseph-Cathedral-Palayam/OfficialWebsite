import Image from 'next/image'
// import church from '/churchp.png';
// import joseph from '/assets/stjoseph.jpg';
import Bloglist from '../components/bloglist/Bloglist';
import styles from '../styles/Home.module.css'
import { blogList } from '../config/data';

export const getStaticProps = async () => {
  return {
    props: {
      data: blogList
    }
  }
}

export default function Home({ data }) {
  return (
    <>
      <div className={styles.stjoseph__header} id="home" >
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
          <Image src="/churchp.png" alt="Picture of the author"
            width="1750"
            height="1700" />
        </div>
      </div >


      <div className='Aboutus-wrap'>
        <h2 className='gradient__text'>News & Updates</h2>
        {console.log(data)}
        <Bloglist blogs={data} />
      </div>


      <div className={styles.home__possibility}>
        <div className={styles.home__possibility_image}>
          <Image className={styles.home__possibility_image_tag} src="/stjoseph.jpg" alt="joseph" width="650" height="600"/>
        </div>
        <div className={styles.home__possibility_content}>
          <h4>
            Our Patron Saint
          </h4>
          <h1 className={styles.gradient__text}>St Joseph</h1>
          <p>“In Joseph … heads of the household are blessed with the unsurpassed model of fatherly watchfulness and care.”</p>
          <p>Everything we know about the husband of Mary and the foster father of Jesus comes from Scripture
            and that has seemed too little for those who made up legends about him.
            We know he was a carpenter, a working man, for the skeptical Nazarenes ask about Jesus, "Is this
            not the carpenter's son?" (Matthew 13:55). He wasn't rich for when he took Jesus to the Temple to be
            circumcised and Mary to be purified he offered the sacrifice of two turtledoves or a pair of pigeons,
            allowed only for those who could not afford a lamb (Luke 2:24).
            Despite his humble work and means, Joseph came from a royal lineage. Luke and Matthew disagree
            some about the details of Joseph's genealogy but they both mark his descent from David, the
            greatest king of Israel (Matthew 1:1-16 and Luke 3:23-38). Indeed the angel who first tells Joseph
            about Jesus greets him as "son of David," a royal title used also for Jesus</p>
        </div>
      </div>
    </>
  )
}
