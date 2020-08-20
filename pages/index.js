import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { getPosts } from './api/ghost';
import {PostTile} from '../components/PostTile/PostTile';
import { Header } from '../components/Header/Header';
import { Weather } from '../components/Weather/Weather';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';

export async function getStaticProps(){
  const posts = await getPosts();
  return {props: {posts: posts} }
}

export default function Home(props) {
  const [weather, setWeather] = useState({"coord":{"lon":15.51,"lat":51.94},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":280.62,"feels_like":28.85,"temp_min":26,"temp_max":30,"pressure":1012,"humidity":41},"visibility":10000,"wind":{"speed":1.5,"deg":0},"clouds":{"all":82},"dt":1597922403,"sys":{"type":1,"id":1714,"country":"PL","sunrise":1597895458,"sunset":1597947117},"timezone":7200,"id":3080165,"name":"Zielona Góra","cod":200});

  useEffect(() => {
      fetch('http://api.openweathermap.org/data/2.5/weather?id=3080165&appid=e186820a755e6badc03e15fe1819552c&units=metric').then(res => {
          return res.json();
      }).then(function(res) {
          setWeather(res);
      });
  }, []);

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
            if(index==1){
              return(<React.Fragment key="weatherandpost">
              <li key="weather"><Weather weather={weather}/></li>
              <li key={post.id}>
              <Link href={`posts/[slug]`} as={`posts/${post.slug}`}>
                <a><PostTile post={post} size={index ? true : false}/></a> 
              </Link>
              </li>
              </React.Fragment>
              )
            }
            if(index<10){return(          
              <li key={post.id}>
              <Link href={`posts/[slug]`} as={`posts/${post.slug}`}>
                <a><PostTile post={post} size={index ? true : false}/></a> 
              </Link>
              </li>
            )}})}
        </ul>
        <div className="Contact">
          <SectionHeader title="Kontakt"/>
          <div className="Contact__description">
              <b>Administrator Strony</b>
              <p>Mateusz Jakowlew</p>
              <br/>
              <b>Sołtys Droszkowa</b>
              <p>Tomasz Kunc</p>
              <br/>
              <b>Rada Sołecka</b>
              <p>Agnieszka Georgiczuk</p>
              <p>Aneta Krieger</p>
              <p>Bogusława Jackowska</p>
              <p>Ewa Kostrzewska</p>
              <p>Jakub Czwojda</p>
              <p>Jarosław Śliwiński</p>
              <p>Mateusz Jakowlew</p>
          </div>  
          <img className="Contact__img" src="/contact.svg"/>
        </div>
      </main>
    </div>
    <style jsx>{`
      .Contact{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        @media(max-width: 627px){
          justify-content: center;
          text-align: center;
        }
        b{
          font-size: 18px;
        }
        &__img{
          width: 300px;
        }
      }
      main{
        max-width: 1000px;
        padding: 20px;
        margin: 0 auto;
      }
      ul{
        margin: 25px 0 50px;
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
