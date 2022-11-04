import { useRouter } from "next/router"
import styles from '../../styles/Posts.module.css';
import Image from 'next/image'
import { blogList } from '../../config/data';

export const getStaticPaths = async () => {
    const paths = blogList.map(e =>  {params: {id: e.id.toString()}})
    console.log(paths,'ss');
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    let data;
    blogList.map(e => {e.id === id ? data = e : {}});
    return {
        props: {post: data}
    }
}

export default function PostPage({post}) {
    console.log(post,'what');
    const router = useRouter();
    const id = router.query.id;
    return(
        <div className={styles.post_container}>
            <h1>Hi Hello</h1>
            <Image src={post.cover} alt="cover" width="400" height="400"/>

        </div>
    )

}