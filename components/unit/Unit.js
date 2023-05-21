import React from 'react'
import UnitCard from './UnitCard'
import styles from '../../styles/Unit.module.css';
import unitList from '../../config/bulletin.json';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';

const Unit = () => {
  const filteredList = unitList.slice(0, 5);
  return (
    <div className={styles.stjoseph__brand_container}>
      <Link href='/'>
        <span className={styles.stjoseph__brand_title}>
          <h1 className={styles.gradient__text}>
            Units
          </h1>
          <BsFillArrowRightCircleFill className={styles.arrowButton} />
        </span>
      </Link>
      <div className={styles.cards_wrapper}>

        {
          filteredList.map(e => (
            <UnitCard key={e.id} month={e.month} img={e.img} file={e.file} />

          )
          )
        }
      </div>
    </div>
  )
}

export default Unit