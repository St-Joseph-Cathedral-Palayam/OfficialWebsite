import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Unit.module.css';
import Link from 'next/link';

const UnitCard = ({ month, img, file, isUnit = false, onClick }) => {
  return (
    <div className={styles.container}>
      {
        onClick ? (
          <div onClick={onClick} style={{ cursor: 'pointer' }}>
            <Image src={img} alt="" width="250" height="300" />
            <p className={styles.title}>{month.substring(0, 10)}</p>
            <div className={styles.overlay}></div>
            <div className={styles.button}> View </div>
          </div>
        ) : isUnit ? (
          <Link href={`gallery/${file}`} key={month}>
            <Image src={img} alt="" width="250" height="300" />
            <p className={styles.title}>{month.substring(0, 10)}</p>
            <div className={styles.overlay}></div>
            <div className={styles.button}> View </div>
          </Link>
        )
          :
          (
            <>
              <Image src={img} alt="" width="250" height="300" />
              <p className={styles.title}>{month.substring(0, 10)}</p>
              <div className={styles.overlay}></div>
              <div className={styles.button}><a href={file}> View </a></div>
            </>
          )
      }
    </div>
  )
}

export default UnitCard