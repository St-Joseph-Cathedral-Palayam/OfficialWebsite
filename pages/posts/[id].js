import { useRouter } from "next/router"
import styles from '../../styles/Posts.module.css';
import Image from 'next/image'
import { blogList } from '../../config/data';

export const getStaticPaths = async () => {
    const paths = blogList.map(e => ({ params: {id: e.id.toString()}}))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    let data;
    blogList.map(e => (e.id == id) ? data = e : {});
    return {
        props: {post: data}
    }
}

export default function PostPage({post}) {
    const router = useRouter();
    const id = router.query.id;
    return(
        <div className={styles.post_container}>
            <div className={styles.post_banner}>
                <Image src={post.cover} alt="cover" width="400" height="400"/>
            </div>
            <div className={styles.post_wrapper}>
                <div className={styles.post_middlewrapper}>
                    <h1>{post.title}</h1>
                    <span>{post.category}</span>
                    <p>{post.description}</p>
                </div>
                <div className={styles.post_rightwrapper}>
                    <h2>{post.authorName}</h2>
                    <Image src = {post.authorAvatar} alt='authorAvatar' width="100" height="100"/>
                </div>
            </div>
            
        </div>
    )

}