import Link from 'next/link';
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import Banner from '../components/Banner';
import NewsCard from '../components/NewsCard';
import { blogList } from '../config/data';
import styles from '../styles/Updates.module.css';

const Updates = () => {
    const [itemoffset, setItemoffset] = useState(0);
    const itemsperpage = 6;
    const endooffset = itemoffset + itemsperpage;
    const items = (Object.entries(blogList));
    let currentItems = items.slice(itemoffset, endooffset)
    currentItems = currentItems.reduce((a, currentItems) => {
        return [currentItems[1], ...a];
    }, []);
    const pageCount = blogList.length/ itemsperpage;

    const handlePageClick = (event) => {
        const newOffset= (event.selected * 6) % blogList.length
        setItemoffset(newOffset)
        console.log(event)
        console.log(itemoffset)
        console.log(newOffset)
    }
    return (
        <>
            <Banner title="Updates" subtitle="This is the word of jesus and thou you shall heal" />
            <div className={styles.stjoseph_updates_container}>
                <div className={styles.stjoseph_updates_news}>
                    <div className={styles.updatesGrid}>
                        {currentItems.map(e => (
                            <NewsCard title={e.title} body={e.category} image={e.cover} id={e.id} key={e.id} />
                        )
                        )}
                    </div>
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
                </div>
            </div>
        </>
    )
}

export default Updates