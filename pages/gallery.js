import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Banner from '../components/Banner';
import { imagelist } from '../config/images';
import styles from '../styles/Gallery.module.css';

const gallery = () => {
  return (
    <>
      <Banner title="Gallery" subtitle="This is the word of jesus and thou you shall heal" />
      <div className={styles.stjoseph__gallery_container}>
        {imagelist.map(e => (
          <Link href={`gallery/${e.id}`} key={e.id}>
            <Image src={e.src} alt={e.id} width="300" height="300" />
          </Link>
        ))
        }
      </div>
    </> 
  )
}

export default gallery  