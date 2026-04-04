import { useRouter } from "next/router";
import styles from "../../styles/Posts.module.css";
import blogList from "../../config/posts.json";
import ReactMarkdown from "react-markdown";
import { MiniNewsCard } from "../../components/NewsCard";
import CloudinaryGallery from "../../components/CloudinaryGallery";

export const getStaticPaths = async () => {
  const paths = blogList.map((e) => ({ params: { id: e.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  let data;
  blogList.map((e) => (e.id == id ? (data = e) : {}));
  return {
    props: { post: data },
  };
};

export default function PostPage({ post }) {
  const router = useRouter();
  const currentData = Object.values(blogList);
  currentData.slice(0, 5);
  return (
    <div className={styles.post_container}>
      <div className={styles.post_wrapper}>
        <div className={styles.post_middlewrapper}>
          <div className={styles.post_banner}>
            <h1>{post.title}</h1>
            <div className={styles.post_tag}>{post.category}</div>
            <h3>{post.authorName}</h3>
            {post.cover && !post.cloudinaryFolder && (
              <img
                src={post.cover}
                alt="cover"
                width="400"
                height="400"
                className="object-contain"
              />
            )}
          </div>
          <div className={styles.post_description}>
            <ReactMarkdown>{post.description}</ReactMarkdown>

            {/* Display Cloudinary Gallery if cloudinaryFolder is present */}
            {post.cloudinaryFolder && (
              <div style={{ marginTop: "30px" }}>
                <h2 style={{ marginBottom: "20px" }}>Gallery</h2>
                <CloudinaryGallery folderName={post.cloudinaryFolder} />
              </div>
            )}

            <div className={styles.post_updates}>
              {currentData.map(
                (e) =>
                  e.category === "Updates" && (
                    <MiniNewsCard
                      title={e.title}
                      body={e.category}
                      id={e.id}
                      img={e.cover}
                      className={styles.post_updates_card}
                      key={e.id}
                    />
                  ),
              )}
            </div>
          </div>
          {/* <p>{post.description}</p> */}
        </div>
      </div>
    </div>
  );
}
