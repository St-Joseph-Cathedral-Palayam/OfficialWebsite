import Link from 'next/link';
import React from 'react'
import NewsCard from '../components/NewsCard';
import { blogList } from '../config/data';
import styles from '../styles/Updates.module.css';


const updates = () => {
  return (
    <div className={styles.stjoseph_updates_container}>
    <div className={styles.stjoseph_updates_news}>
        <h2 className={styles.gradient__text}>Latest News</h2>
        <div className={styles.updatesGrid}>
            {blogList.map(e => (e.category === 'History') &&
              <Link href={`/posts/${e.id}`} key={e.id}>
                <NewsCard title={e.title} body={e.category} image={e.cover}/>
              </Link> 
            )}
            {blogList.map(e => (e.category === 'Updates') && <NewsCard key={e.id} title={e.title} body={e.category} />)}
        </div>
        <h2 className={styles.gradient__text}>Unit updates</h2>
        <div className={styles.updatesGrid}>
            {blogList.map(e => (e.category === 'History') && <NewsCard key={e.id} title={e.title} body={e.category} image={e.cover}/>)}
            {blogList.map(e => (e.category === 'Updates') && <NewsCard key={e.id} title={e.title} body={e.category} />)}
        </div>
    </div>
</div>
  )
}

export default updates