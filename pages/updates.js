import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { blogList } from '../config/data';
import styles from '../styles/Updates.module.css';


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

const updates = () => {
  return (
    <div className={styles.stjoseph_updates_container}>
    <div className={styles.stjoseph_updates_news}>
        <h2 className={styles.gradient__text}>Latest News</h2>
        <div className={styles.updatesGrid}>
            {blogList.map(e => (e.category === 'Updates') && <NewsCard key={e.id} title={e.title} body={e.category} />)}
            {blogList.map(e => (e.category === 'Updates') && <NewsCard key={e.id} title={e.title} body={e.category} />)}
        </div>
    </div>
</div>
  )
}

export default updates