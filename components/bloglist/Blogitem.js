import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Blogitem.module.css'


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { ninjas: data }
    }
  }

const Blogitem = ({ blog: { id, description, title, createdAt, author, category, cover } }) => {
    console.log(cover);
    return (
        <div className={styles.blogitem_wrap}>
            <Image src={cover} alt="cover" className={styles.blogitem_cover} width="350"
                height="300" layout="fill"/>
            <p className={styles.chip}>{category}</p>
            <h3>{title}</h3>
            <p className={styles.blogItem_desc}>
                {description}
            </p>
            <footer>
                <div className="blogitem-author">
                    <div>
                        <h6>{author}</h6>
                        <p>{createdAt}</p>
                    </div>
                </div>
                <Link className={styles.blogItem_link} href={`/${id}`}>
                    ReadMore
                </Link>
            </footer>
        </div>
    )
}

export default Blogitem