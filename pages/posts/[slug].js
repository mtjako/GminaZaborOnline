import { getSinglePost } from '../api/ghost';
import { getPosts } from '../api/ghost';
import { Header } from '../../components/Header/Header';
import Head from 'next/head';

export async function getStaticPaths(){
    const posts = await getPosts();
    const paths = posts.map((post)=> ({
        params: {
            slug: post.slug,
        }
    }))
    return {paths, fallback: false}
  }

export async function getStaticProps(params){
    const post = await getSinglePost(params.params.slug);
    return {props: {post: post} }
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
        &__content{
          max-width:1000px;
          margin: 100px auto 0;
          font-size: 20px;
          line-height: 200%;
        }
      }
    `}</style>    
    </>
  )
}

export default Post;