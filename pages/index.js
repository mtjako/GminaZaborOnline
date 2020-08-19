import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { getPosts } from './api/ghost';
import {PostTile} from '../components/PostTile/PostTile';
import { Header } from '../components/Header/Header';
import React, { useState, useEffect } from 'react';

export async function getStaticProps(){
  const posts = await getPosts();
  return {props: {posts: posts} }
}

export default function Home(props) {
  return (
    <>
    <div className={styles.container} className="body">
      <Head>
        <title>Gmina Zabór Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Aktualności" subtitle="Droszków" img="https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
      <main className={styles.main}>
        <ul>
          {props.posts.map((post,index) => {
              return(          
              <li key={post.id}>
              <Link href={`posts/[slug]`} as={`posts/${post.slug}`}>
                <a><PostTile post={post} size={index ? true : false}/></a> 
              </Link>
              </li>
          )})}
        </ul>
      </main>
    </div>
    <style jsx>{`
      main{
        max-width: 1000px;
        padding: 20px;
        margin: 0 auto;
      }
      ul{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        @media(min-width: 680px){
          grid-template-columns: repeat(2, 1fr);
        }
        @media(min-width: 1000px){
          grid-template-columns: repeat(3, 1fr);
        }
        grid-gap: 20px;
        list-style-type: none;
        li{
          @media(min-width: 1000px){
            &:nth-child(1){
              grid-column: span 2;
            }
          }
        }
      }
    `}</style>    
    </>
  )
}
