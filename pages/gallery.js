import Link from 'next/link';
import React, { useState } from 'react';
import Banner from '../components/Banner';
import imagelist from '../config/gallery.json';
import styles from '../styles/Gallery.module.css';
import UnitCard from '../components/unit/UnitCard';
import ReactPaginate from 'react-paginate';
import MediaCarousel from '../components/MediaCarousel';

const Gallery = () => {
  const [itemoffset, setItemoffset] = useState(0);
  const [selectedFolder, setSelectedFolder] = useState(null); // Null means default/root
  const [selectedTitle, setSelectedTitle] = useState('Ash Wednesday');
  const [selectedImages, setSelectedImages] = useState([]);

  const itemsperpage = 6;
  const endooffset = itemoffset + itemsperpage;
  const items = (Object.values(imagelist));
  let currentItems = items.slice(itemoffset, endooffset)
  const pageCount = Math.round(imagelist.length / itemsperpage);
  console.log(pageCount)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % imagelist.length
    setItemoffset(newOffset)
  }

  const handleUnitClick = (folderName, title, images) => {
    setSelectedFolder(folderName);
    setSelectedTitle(title);
    setSelectedImages(images || []);
    // Scroll to top of carousel
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Banner title="Gallery" subtitle="This is the word of jesus and thou you shall heal" />
      <div className={styles.stjoseph__gallery_container}>
        <Link href="/" className={styles.stjoseph__gallery_backbutton}>
          <p> Back </p>
        </Link>

        {/* Cloudinary Media Carousel */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#1a1a2e'
          }}>
            {selectedTitle}
          </h2>
          <MediaCarousel
            autoplay={true}
            autoplayDelay={5000}
            showThumbnails={false}
            folder={selectedFolder}
            title={selectedTitle}
            localImages={selectedImages}
          />
        </div>

        {/* Existing Static Gallery */}
        <h2 style={{
          textAlign: 'center',
          fontSize: '1.75rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          marginTop: '3rem',
          color: '#1a1a2e'
        }}>
          Gallery Albums
        </h2>
        <div className={styles.stjoseph__gallery_container_images}>
          {imagelist.map(e => (
            <UnitCard
              key={e.id}
              month={e.title}
              img={e.thumbnail || e.images[0]}
              file={e.id}
              isUnit
              onClick={() => handleUnitClick(e.folder, e.title, e.images)}
            />
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