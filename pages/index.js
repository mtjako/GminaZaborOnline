import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { getPosts } from './api/ghost';
import {PostTile} from '../components/PostTile/PostTile';
import { Header } from '../components/Header/Header';

export async function getStaticProps(){
  const posts = await getPosts();
  return {props: {posts: posts} }
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gmina Zabór Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Aktualności" subtitle="Droszków" img="https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
      <main className={styles.main}>
        <ul>
          {props.posts.map(post => {
              return(          
              <li key={post.id}>
              <Link href={`posts/[slug]`} as={`posts/${post.slug}`}>
                <a><PostTile post={post}/></a> 
              </Link>
              </li>
              )})}
        </ul>
      </main>
    </div>
  )
}
