import React from 'react';
import styles from '../styles/Updates.module.css';
import { Gallery } from "react-grid-gallery";
import ImageGallery from 'react-image-gallery';
import Image from 'next/image';
import { blogList } from '../config/data';
import Link from 'next/link';

const images = [
    { src: "/blog01.png",width: 320, height: 174,  thumbnail: "/blog01.png", caption: 'adjshajhsjdk' ,      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
     ],},
    { src: "/011.JPG",  thumbnail: "/011.JPG" },
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
                <Gallery images={images} onClick={images}/>
            </div>

        </div>
    )
}

export default Updates