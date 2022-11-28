import { useRouter } from "next/router"
import styles from '../../styles/Posts.module.css';
import Image from 'next/image'
import { blogList } from '../../config/data';
import ReactMarkdown from "react-markdown";
import { MiniNewsCard } from "../../components/NewsCard";

export const getStaticPaths = async () => {
    const paths = blogList.map(e => ({ params: { id: e.id.toString() } }))
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
        props: { post: data }
    }
}

export default function PostPage({ post }) {
    const router = useRouter();
    const id = router.query.id;
    return (
        <div className={styles.post_container}>
            <div className={styles.post_wrapper}>
                <div className={styles.post_middlewrapper}>
                    <div className={styles.post_banner}>
                        <h1>{post.title}</h1>
                        <div className={styles.post_tag}>{post.category}</div>
                        <Image src={post.cover} alt="cover" width="400" height="400" />
                    </div>
                    <div className={styles.post_description}>
                        <ReactMarkdown>
                            {post.description}
                        </ReactMarkdown>
                    </div>
                    {/* <p>{post.description}</p> */}
                </div>
                <div className={styles.post_rightwrapper}>
                    <h4>Authored by</h4>
                    <Image src={post.authorAvatar} alt='authorAvatar' width="100" height="100" />
                    <h2>{post.authorName}</h2>
                    <div className={styles.post_updates}>
                        {blogList.map(e => (e.category === 'History') &&
                            <MiniNewsCard title={e.title} body={e.category} id={e.id} />
                        )}
                    </div>
                </div>
            </div>

        </div>
    )

}