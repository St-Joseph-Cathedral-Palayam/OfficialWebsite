import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Unit.module.css';
import Link from 'next/link';

const UnitCard = ({ month, img, file, isUnit = false }) => {
  return (
    <div className={styles.container}>
      {
        isUnit ? (
          <Link href={`gallery/${file}`} key={month}>
            <Image src={img} alt="" fill style={{ objectFit: 'cover' }} />
            <div className={styles.overlay}>
               <p className={styles.title}>{month.substring(0, 15)}</p>
               <div className={styles.button}> View </div>
            </div>
          </Link>
        )
          :
          (
            <>
              <Image src={img} alt="" fill style={{ objectFit: 'cover' }} />
              <div className={styles.overlay}>
                 <p className={styles.title}>{month.substring(0, 15)}</p>
                 <div className={styles.button}><a href={file}> View </a></div>
              </div>
            </>
          )
      }
    </div>
  )
}

export default UnitCard