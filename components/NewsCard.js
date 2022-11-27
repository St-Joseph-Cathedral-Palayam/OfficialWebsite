import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from '../styles/Updates.module.css';

const NewsCard = ({ title, body, image, id }) => {
    return (
        <div className={styles.stjoseph_updates_cards}>
            <div className={styles.stjoseph_updates_title}>
                <h3>{title}</h3>
                <p>{body}</p>
                <Link href={`/posts/${id}`}>
                Read more
                </Link>
            </div>
            {image && (
                <Image src={image} alt='alt' width="300" height="200" className={styles.stjoseph_updates_image} />
            )}
        </div>

    )
}

export default  NewsCard;