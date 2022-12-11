import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Updates.module.css';

const NewsCard = ({ title, body, image, id}) => {
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

export default NewsCard;


export const MiniNewsCard = ({ title, body, img, id}) => {
    return (
        <div className={styles.stjoseph_updates_minicards} style={{'backgroundImage': `linear-gradient(0deg, rgba(8, 8, 8, 0.3), rgba(0, 0, 0, 0.3)), url(${img || 'https://images.unsplash.com/photo-1543949223-fd634d634e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'})`}}>
            <div className={styles.stjoseph_updates_title}>
                <h3>{title}</h3>
                <p>{body}</p>
                <Link href={`/posts/${id}`}>
                Read more
                </Link>
            </div>
        </div>

    )
}