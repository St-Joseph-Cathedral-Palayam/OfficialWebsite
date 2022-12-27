import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Banner from '../../components/Banner';
import imagelist from '../../config/gallery.json'
import styles from '../../styles/Gallery.module.css';

export const getStaticPaths = async () => {
    const paths = imagelist.map(e => ({ params: { id: e.id.toString() } }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    let data;
    imagelist.map(e => (e.id == id) ? data = e : {});
    return {
        props: { post: data }
    }
}

export default function Gallery({ post }) {
    return (
    <>
        <Banner title="Gallery" subtitle="This is the word of jesus and thou you shall heal" />
        <Link href="/gallery" className={styles.stjoseph__gallery_backbutton}>
            <p> Back </p> 
        </Link>
        <div className={styles.stjoseph__gallery_container}>
            {post.images.map((e) => (
                <Image src={e} key={e} alt={e} height="300" width="300" />
            )
            )}
        </div>
    </>
)}
