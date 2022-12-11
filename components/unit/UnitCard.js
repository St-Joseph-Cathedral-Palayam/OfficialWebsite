import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Unit.module.css';

const UnitCard = ({ month, img, file }) => {
  return (
    <div class={styles.container}>
      <Image src={img} alt="" width="250" height="300"/>
      <p class={styles.title}>{month}</p>
      <div class={styles.overlay}></div>
      <div class={styles.button}><a href={file}> View </a></div>
    </div>
  )
}

export default UnitCard