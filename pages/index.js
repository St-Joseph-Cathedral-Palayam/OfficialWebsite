/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Typed from 'typed.js';
import styles from '../styles/Home.module.css'
import blogList from '../config/posts.json';
import popup from '../config/popup.json';
import { useEffect, useRef, useState } from 'react';
import Updates from '../components/Updates';
import Unit from '../components/unit/Unit';
import Head from 'next/head';
import Popup from '../components/Popup';
import { Contact } from '../components/Contact';

export const getStaticProps = async () => {
  return {
    props: {
      data: blogList
    }
  }
}

const Feature = ({ title, text1, text, text2, text3 }) => (
  <div className={styles.church__features_container__feature}>
    <div className={styles.church__features_container__feature_title}>
      <h1>
        {title}
      </h1>
      <div />
    </div>
    <div className={styles.church__features_container_feature_text}>
      <p className={styles.text1}>
        {text1}
      </p>
      <p>
        {text}
      </p>
      <p className={styles.text1}>
        {text2}
      </p>
      <p>
        {text3}
      </p>
    </div>

  </div>
)

export default function Home({ data }) {
  const el = useRef(null);
  const typed = useRef(null);
  const [trigger, setTrigger] = useState(false)
  useEffect(() => {
    const options = {
      strings: [
        '“നിങ്ങൾ ചെയ്യുന്നതെല്ലാം സ്നേഹത്തിൽ ചെയ്‍വിൻ.” — 1 കൊരിന്ത്യർ 16:14',
        '“Everything should be done in love.” — 1 Corinthians 16:14',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 2700,
      loopCount: Infinity,
      showCursor: false,
    }

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    }

  }, [])

  useEffect(() => {
    setTimeout(() => {
      setTrigger(true)
    }, 2000);
  }, [])

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
      </Head>
      {/* Banner Start */}
      <div className={styles.stjoseph__header} id="home" >
        <div className={styles.stjoseph__header_content}>
        {popup.image &&
        (
          <Popup trigger={trigger} setTrigger={setTrigger}>
            <Image src={popup.image} alt='popup image' width='400' height='800'/>
          </Popup>
        )
      }
          <h1 className={styles.gradient__text} ref={el} />
          <p>Welcome to the official website of the St. Joseph’s Metropolitan Cathedral, Trivandrum, Kerala. The
            St. Joseph’s Cathedral located at Palayam is an ancient church in India where believers from far and
            wide flock to receive heavenly blessings.
          </p>
          <div className={styles.stjoseph__header_content__input}>
            <button type='button'>For Queries</button>
          </div>
        </div>
        <div className={styles.stjoseph__header_image}>
          <Image src="/assets/churchp.png" alt="Picture of the author"
            width="1750"
            height="1700" />
        </div>
      </div >

      {/* Blog Start */}
      <Updates data={data} />

      {/* Patron Start */}
      <div className={styles.home__possibility}>
        <div className={styles.home__possibility_image}>
          <Image className={styles.home__possibility_image_tag} src="/assets/stjoseph.jpg" alt="joseph" width="650" height="600" />
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

      {/*Mass Timings Start*/}
      <div className={styles.church__timing}>
        <div className={styles.church__timing_heading}>
          <h1 className={styles.gradient__text}>Mass Timings</h1>
        </div>
        <div className={styles.church__timing_container}>
          <div className={styles.church__timing_contained}>
            <Feature title="St.Joseph’s Cathedral, Palayam" text1="Sunday " text="  5:45am  (English)  7.00 am 8.45 am 5.00pm" text2="Weekdays" text3="5.45am 6.30am  5.30pm" />
          </div>
          <div className={styles.church__timing_contained}>
            <Feature title="St.Antony’s Chapel, Alummoodu" text1="Sunday " text="8.30 am" />

            <Feature title="SantaMaria Oldage Home" text1="Sunday " text="6.00 am" text2="Weekdays" text3="6.30 pm" />
          </div>
          <div className={styles.church__timing_contained}>
            <Feature title="Kunnukuzhi Chapel" text1="Sunday " text="10.30 am" />

            <Feature title="St.Joseph’s HSS Chapels" text1="Sunday " text="6.30 am" text2="Tuesday" text3="6.00 pm" />
          </div>
          <div className={styles.church__timing_contained}>
            <Feature title="Jubilee Hospital Chapel" text1="Everyday " text="6.00 am" />

            <Feature title="FatimaMata Chapel, VanrosJn" text1="Sunday " text="5.30 pm" text2="Saturday" text3="5.30 pm" />
          </div>
        </div>

      </div>

      {/*Priests Start*/}
      <div className={styles.stjoseph__brand_container}>
        <h1 className={styles.gradient__text}> "OUR SPIRITUAL FATHERS" </h1>
        <p>-Walk by faith not by light-</p>
        <div className={styles.stjoseph__brand_container_cards}>
          <div className={styles.stjoseph__blog_container__article}>
            <div className={styles.stjoseph__blog_container__article_image}>
              <Image src="/assets/DSC00595.jpg" alt="blog" width="400" height="400" />
            </div>
            <div className={styles.stjoseph__blog_container__article_content}>
              <h3>Most Rev. Dr. Thomas J Netto</h3>
              <p>Arch Bishop</p>
            </div>
          </div>
          <div className={styles.stjoseph__blog_container__article}>
            <div className={styles.stjoseph__blog_container__article_image}>
              <Image src="/assets/011.JPG" alt="blog" width="400" height="400" />
            </div>
            <div className={styles.stjoseph__blog_container__article_content}>
              <h3>Most Rev. Dr. Christudas Rajappan</h3>
              <p>Auxiliary Bishop</p>
            </div>
          </div>
          <div className={styles.stjoseph__blog_container__article}>
            <div className={styles.stjoseph__blog_container__article_image}>
              <Image src="/assets/DSC01943.JPG" alt="blog" width="400" height="400" />
            </div>
            <div className={styles.stjoseph__blog_container__article_content}>
              <h3>Very Rev. Msgr. Nicholas T</h3>
              <p>Parish Priest</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.stjoseph__facebook_container}>
        <Unit />
      </div>
      <div className={styles.stjoseph__brand_container}>
        <h1 className={styles.gradient__text} style={{textAlign: 'center'}}> "Contact Us" </h1>
        <Contact />
      </div>
    </>
  )
}
