import React from 'react';
import styles from '../styles/Banner.module.css'

const Banner = ({title,subtitle}) => {
  return (
    <div className={styles.page__aboutus}>
      <div className={styles.page__aboutus_title}>
      <h1 className={styles.gradient__text}>{title}</h1>
      <p>{subtitle}</p>
      <p>psalm 18:32</p>
      </div>
      </div>
  )
}

export default Banner