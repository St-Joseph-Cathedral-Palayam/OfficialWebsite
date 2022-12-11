import React from 'react';
import styles from '../styles/Update.module.css';
import { Gallery } from "react-grid-gallery";
import { blogList } from '../config/data';
import NewsCard from './NewsCard';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import { imagelist } from '../config/images';

const Updates = ({ data }) => {
    const images = imagelist.map(e => ({
        src: e.src
    }));
    const currentData = Object.values(data); 
    blogList.slice(0, 5)
    return (
        <div className={styles.stjoseph_updates_container}>
            <div className={styles.stjoseph_updates_news}>
                <Link href="/updates">
                    <div className={styles.stjoseph_updates_news_title}>
                        <h2 className={styles.gradient__text}>Latest News </h2>
                        <BsFillArrowRightCircleFill className={styles.arrowButton} />
                    </div>
                </Link>
                {currentData.map(e => (e.category === 'Updates') &&
                    <NewsCard title={e.title} body={e.category} id={e.id} key={e.id} />
                )}
            </div>
            <div className={styles.stjoseph_updates_updates}>
                <Link href="/gallery">
                    <div className={styles.stjoseph_updates_news_title}>
                        <h2 className={styles.gradient__text}>Gallery </h2>
                        <BsFillArrowRightCircleFill className={styles.arrowButton} />
                    </div>
                </Link>

                <div className={styles.stjoseph_gallery_container}>
                    <Gallery images={images}/>
                </div>
            </div>

        </div>
    )
}

export default Updates