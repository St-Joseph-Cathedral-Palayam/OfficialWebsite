import React from 'react';
import styles from '../styles/Priests.module.css'
import Image from 'next/image';
import Banner from '../components/Banner';
import { priestslist } from '../config/priets';

const Article = ({ imgUrl, text, text2 }) => {
    return (
        <div className={styles.stjoseph__blog_container__article}>
            <div className={styles.stjoseph__blog_container__article_image}>
                <Image src={imgUrl} alt="blog" width="400" height="400" />
            </div>
            <div className={styles.stjoseph__blog_container__article_content}>
                <div>
                    <h3>{text}</h3>
                    <p>{text2}</p>
                </div>

            </div>
        </div>
    )
}

const History = () => {
    return (
        <div>
            <Banner title="Our Priests" subtitle="This is the word of jesus and thou you shall heal" />

            <div className={styles.history_wrap}>

                <h1>Our Bishops</h1>

                <div className={styles.stjoseph__blog_container_groupB}>
                    <Article imgUrl="/bishopvincentdereiraaa.jpg" text="Rt. Rev Dr. Vincent Dereira" text2="1880-1974" />
                    <Article imgUrl="/bernardperera.jpg" text="Rt. Rev Dr. Peter Bernard Pereira" text2="1966-1978" />
                    <Article imgUrl="/jacob.jpg" text="Rt. Rev Dr. Jacob Acharuparambil" text2="1978-1990" />
                    <Article imgUrl="/drsoospakiam.jpg" text="Rt. Rev. Dr. Soosai M Pakiam" text2="1990-2022" />
                    <Article imgUrl="/DSC00595.jpg" text="Most Rev. Dr. Thomas J Netto " text2="2021-Present" />
                    <Article imgUrl="/011.JPG" text="Most Rev. Dr. Christudas Rajappan " text2="2016-Present" />
                </div>

                <h1>Our Priests</h1>
                <div className={styles.history_wrap__table}>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Year</th>
                        </tr>
                        {priestslist.map(e => (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.period}</td>
                            </tr>
                        )
                        )
                        }
                    </table>
                </div>
            </div>

        </div>




    )
}
export default History