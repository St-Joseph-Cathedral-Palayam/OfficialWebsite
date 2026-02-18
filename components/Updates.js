import React from 'react';
import styles from '../styles/Update.module.css';
import NewsCard from './NewsCard';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import imagelist from '../config/gallery.json';
import MediaCarousel from './MediaCarousel';

const Updates = ({ data }) => {
    const currentData = Object.values(data);

    // Select the latest gallery item to display
    const featuredGallery = imagelist[0];

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
                    {/* <Gallery images={images}/> */}
                    <MediaCarousel
                        autoplay={true}
                        autoplayDelay={5000}
                        showThumbnails={false}
                        title={featuredGallery ? featuredGallery.title : 'Gallery'}
                    />
                </div>
            </div>

        </div>
    )
}

export default Updates