import React from 'react';
import styles from '../styles/Update.module.css';
import { Gallery } from "react-grid-gallery";
import { blogList } from '../config/data';
import NewsCard from './NewsCard';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';

const images = [
    { src: "/011.JPG", thumbnail: "/011.JPG" },
    { src: "/DSC00595.jpg", thumbnail: "/DSC00595.jpg" },
    { src: "/DSC00854.JPG", thumbnail: "/DSC00854.JPG" },
    { src: "/DSC08889.JPG", thumbnail: "/DSC08889.JPG" },
    { src: "/DSC01943.JPG", thumbnail: "/DSC01943.JPG" },
    { src: "/DSC00886.JPG", thumbnail: "/DSC00886.JPG" },
    { src: "/image7.jpg", thumbnail: "/image7.jpg" },
    { src: "/image9.jpg", thumbnail: "/image9.jpg" },
    { src: "/image8.jpg", thumbnail: "/image8.jpg" },
    { src: "/image10.jpg", thumbnail: "/image10.jpg" },
];

export const getStaticProps = async () => {
    return {
        props: {
            data: blogList.map(e => e.category === 'Updates')
        }
    }
}

const Updates = ({ data }) => {
    return (
        <div className={styles.stjoseph_updates_container}>
            <div className={styles.stjoseph_updates_news}>
                <Link href="/updates">
                    <div className={styles.stjoseph_updates_news_title}>
                        <h2 className={styles.gradient__text}>Latest News </h2>
                        <BsFillArrowRightCircleFill className={styles.arrowButton} />
                    </div>
                </Link>
                {data.map(e => (e.category === 'Updates') &&
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
                    <Gallery images={images} onClick={images} />
                </div>
            </div>

        </div>
    )
}

export default Updates