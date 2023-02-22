import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Unit.module.css';

const UnitCard = ({ month, img, file }) => {
  return (
    <div className={styles.container}>
      <Image src={img} alt="" width="250" height="300"/>
      <p className={styles.title}>{month}</p>
      <div className={styles.overlay}></div>
      <div className={styles.button}><a href={file}> View </a></div>
    </div>
  )
}

export default UnitCard