import React from 'react';
import Blogitem from './Blogitem';
import styles from '../../styles/Blogitem.module.css'

const Bloglist = ({ blogs }) => {
    console.log(blogs);
    return (
        <div className={styles.bloglist_wrap}>
            {blogs?.map((blog) => (<Blogitem blog={blog} key={blog.id} />))}
        </div>
    )
}


export default Bloglist