import Link from 'next/link';
import React, { useState } from 'react';
import Banner from '../components/Banner';
import imagelist from '../config/gallery.json';
import styles from '../styles/Gallery.module.css';
import UnitCard from '../components/unit/UnitCard';
import ReactPaginate from 'react-paginate';

const Gallery = () => {
  const [itemoffset, setItemoffset] = useState(0);
  const itemsperpage = 6;
  const endooffset = itemoffset + itemsperpage;
  const items = (Object.values(imagelist));
  let currentItems = items.slice(itemoffset, endooffset)
  const pageCount = Math.round(imagelist.length/ itemsperpage);
  console.log(pageCount)

  const handlePageClick = (event) => {
      const newOffset= (event.selected * 6) % imagelist.length
      setItemoffset(newOffset)
  }
  return (
    <>
      <Banner title="Gallery" subtitle="This is the word of jesus and thou you shall heal" />
      <div className={styles.stjoseph__gallery_container}>
        <Link href="/" className={styles.stjoseph__gallery_backbutton}>
          <p> Back </p>
        </Link>
        <div className={styles.stjoseph__gallery_container_images}>
          {imagelist.map(e => (
              <UnitCard key={e.id} month={e.title} img={e.images[0]} file={e.id} isUnit/>
          ))
          }
        </div>
        {pageCount !== 1 && (
          <ReactPaginate
          className={styles.paginate}
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          activeLinkClassName={styles.activeLink}
      />
        )}
        
      </div>
    </>
  )
}

export default Gallery  