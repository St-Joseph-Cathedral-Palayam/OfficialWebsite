import React from 'react';
import styles from '../styles/Updates.module.css';
import ImageGallery from 'react-image-gallery';
import Image from 'next/image';
import { blogList } from '../config/data';
import Link from 'next/link';

const images = [
    { original: "/blog01.png", thumbnail: "/blog01.png" },
    { original: "/blog02.png", thumbnail: "/blog02.png" },
    { original: "/blog03.png", thumbnail: "/blog03.png" },
    { original: "/blog04.png", thumbnail: "/blog04.png" },
    { original: "/blog05.png", thumbnail: "/blog05.png" },
    { original: "/blog01.png", thumbnail: "/blog01.png" },
    { original: "/blog01.png", thumbnail: "/blog01.png" },
];

const NewsCard = ({ title, body, image }) => {
    return (
        <div className={styles.stjoseph_updates_cards}>
            <h3>{title}</h3>
            <p>{body}</p>
            {image && (
                <Image src={image} alt='alt' width="300" height="200" />
            )}
            <Link href='/'>Read more</Link>
        </div>

    )
}

const Updates = () => {
    return (
        <div className={styles.stjoseph_updates_container}>
            <div className={styles.stjoseph_updates_news}>
                <h2 className={styles.gradient__text}>Latest News</h2>
                {blogList.map(e => (e.category === 'Updates') && <NewsCard key={e.id} title={e.title} body={e.category} />)}
            </div>
            <div className={styles.stjoseph_updates_updates}>
                <h2 className={styles.gradient__text}>Updates</h2>
                <ImageGallery
                    width={700}
                    height={654}
                    items={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>

        </div>
    )
}

export default Updates