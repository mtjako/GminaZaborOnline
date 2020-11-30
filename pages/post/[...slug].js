import { Header } from '../../components/Header';
import Head from 'next/head';
import { getPost } from "../../graphql/client";

export async function getServerSideProps(context) {
  const post = await getPost(context.params.slug[context.params.slug.length-1]);
  return {
    props: {
      post
    },
  };
}


const Post = ({post}) => {
  const thumbnail = post.featuredImage != null ? post.featuredImage.node.srcSet.split(', ')[3].split(' ')[0] : "/defaultPost.jpg";
  return (
    <>
    <Head>
      <title>{post.title}</title>
      <link rel="icon" href="/favicon.svg" />
      <meta property="og:url" content={`https://gminazabor.info/posts/${post.slug}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:image" content={thumbnail} />
    </Head>
    <div className="Post">
      <Header title={post.title} subtitle={post.categories.nodes} img={thumbnail}/>
      <main className="Post__content" dangerouslySetInnerHTML={{ __html: post.content }}/>
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
        }
      }
    `}</style>    
    </>
  )
}

export default Post;