import React from 'react'
import Banner from '../components/Banner';
import MediaCarousel from '../components/MediaCarousel';
import styles from '../styles/Updates.module.css';

const Updates = () => {
    return (
        <>
            <Banner title="Updates" subtitle="This is the word of jesus and thou you shall heal" />
            <div className={styles.stjoseph_updates_container}>
                <MediaCarousel autoplay={true} autoplayDelay={5000} showThumbnails={true} />
            </div>
        </>
    )
}

export default Updates