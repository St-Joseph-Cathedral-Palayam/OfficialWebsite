import React, { useState } from 'react';
import styles from '../styles/Unit.module.css';
import UnitCard from '../components/unit/UnitCard';
import { unitList } from '../config/unit';
import Banner from '../components/Banner';
import ReactPaginate from 'react-paginate';

const Units = () => {
    const [itemoffset, setItemoffset] = useState(0);
    const itemsperpage = 10;
    const endooffset = itemoffset + itemsperpage;
    const items = (Object.values(unitList));
    let currentItems = items.slice(itemoffset, endooffset)
    const pageCount = unitList.length/ itemsperpage;

    const handlePageClick = (event) => {
        const newOffset= (event.selected * 6) % unitList.length
        setItemoffset(newOffset)
    }
    return (
        <>
            <Banner title="Unit Books" subtitle="This is the word of jesus and thou you shall heal" />
            <div className={styles.unitList_wrapper}>

                {
                    currentItems.map(e => (
                        <UnitCard key={e.id} month={e.month} img={e.img} file={e.file} />

                    )
                    )
                }
            </div>
                <ReactPaginate
                    className={styles.paginate}
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< prev"
                    renderOnZeroPageCount={null}
                    activeLinkClassName={styles.activeLink}
                />
        </>
    )
}

export default Units
