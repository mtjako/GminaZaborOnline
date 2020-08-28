import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getPosts } from './api/ghost';
import { Header } from '../components/Header/Header';
import { PostsList } from '../components/PostsList/PostsList';
import { Contact } from '../components/Contact/Contact';
import { Church } from '../components/Church/Church';

export async function getServerSideProps(){
  const posts = await getPosts();
  return {props: {posts: posts} }
}

export default function Droszkow(props) {
  const [weather, setWeather] = useState({"coord":{"lon":15.51,"lat":51.94},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":280.62,"feels_like":28.85,"temp_min":26,"temp_max":30,"pressure":1012,"humidity":41},"visibility":10000,"wind":{"speed":1.5,"deg":0},"clouds":{"all":82},"dt":1597922403,"sys":{"type":1,"id":1714,"country":"PL","sunrise":1597895458,"sunset":1597947117},"timezone":7200,"id":3080165,"name":"Zielona Góra","cod":200});

  useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/weather?id=3080165&appid=e186820a755e6badc03e15fe1819552c&units=metric').then(res => {
          return res.json();
      }).then(function(res) {
          setWeather(res);
      });
  }, []);

  return (
    <>
    <div className={styles.container} className="body">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Aktualności" subtitle="Droszków" img="/hero.jpeg"/>
      <main className={styles.main}>
        <PostsList posts={props.posts} weather={weather} town="Droszków" amount={7}/>
        <Church/>
        <Contact/>
      </main>
    </div>
    <style jsx>{`
      main{
        max-width: 1000px;
        padding: 20px;
        margin: 0 auto;
      }
    `}</style>    
    </>
  )
}
