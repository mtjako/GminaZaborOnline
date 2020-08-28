import { getSinglePost } from '../api/ghost';
import { getPosts } from '../api/ghost';
import { Header } from '../../components/Header/Header';
import Head from 'next/head';

export async function getServerSideProps(params){
    const posts = await getPosts();
    const paths = posts.map((post)=> ({
        params: {
            slug: post.slug,
        }
    }))
    const post = await getSinglePost(params.params.slug);
    return {paths, fallback: false},{props: {post: post} };
  }

const Post = (props) => {
  return (
    <>
    <Head>
      <title>{props.post.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="Post">
      <Header title={props.post.title} subtitle="Droszków" img={props.post.feature_image}/>
      <main className="Post__content" dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </div>
    <style jsx>{`
      .Post{
        min-height: calc(100vh - 167px);
        &__content{
          max-width:1000px;
          padding: 32px 20px;
          margin: 0 auto;
          font-size: 20px;
          line-height: 200%;
          p{
            color: red;
          }
        }
      }
    `}</style>    
    </>
  )
}

export default Post;