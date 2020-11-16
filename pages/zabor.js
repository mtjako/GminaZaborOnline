import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header/Header';
import { PostsList } from '../components/PostsList/PostsList';
import { Contact } from '../components/Contact/Contact';
import { getAllPosts } from "../graphql/client";

export async function getServerSideProps(context) {
  const posts = await getAllPosts('Zabór');
  return {
    props: {
      posts
    },
  };
}

export default function Zabor(props) {
  const [weather, setWeather] = useState({"coord":{"lon":15.51,"lat":51.94},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":0,"feels_like":0,"temp_min":0,"temp_max":0,"pressure":1012,"humidity":41},"visibility":10000,"wind":{"speed":1.5,"deg":0},"clouds":{"all":82},"dt":1597922403,"sys":{"type":1,"id":1714,"country":"PL","sunrise":1597895458,"sunset":1597947117},"timezone":7200,"id":3080165,"name":"Zielona Góra","cod":200});
  const town = "Zabór"
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
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:url" content={`https://gminazabor.info/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gmina Zabór Info" />
        <meta property="og:image" content={`https://gminazabor.info/hero/${town}.jpg`} />
      </Head>
      <Header title="Aktualności" subtitle={[{name: town}]} img={`./hero/${town}.jpg`}/>
      <main className={styles.main}>
        <PostsList posts={props.posts} weather={weather} town={town} amount={7}/>
        <Contact town={town}/>
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
