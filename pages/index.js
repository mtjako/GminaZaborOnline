import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import { PostsList } from "../components/PostsList";
import { getAllPosts } from "../graphql/client";

export async function getServerSideProps(context) {
  const posts = await getAllPosts('');
  return {
    props: {
      posts
    },
  };
}

export default function Home(props) {
  const [weather, setWeather] = useState({
    weather: [
      { main: "Clouds", icon: "04d" },
    ],
    main: {
      temp: 0,
    },
  });
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?id=3080165&appid=e186820a755e6badc03e15fe1819552c&units=metric"
    )
      .then((res) => {
        return res.json();
      })
      .then(function (res) {
        setWeather(res);
      });
  }, []);
  const towns = [
    "Czarna",
    "Dąbrowa",
    "Droszków",
    "Łaz",
    "Milsko",
    "Przytok",
    "Tarnawa",
    "Zabór",
  ];
  const random = Math.floor(Math.random() * 8) + 1;

  return (
    <>
      <div className="body">
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <meta property="og:url" content={`https://gminazabor.info/`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Gmina Zabór Info" />
          <meta
            property="og:image"
            content={`https://gminazabor.info/hero/Droszków.jpg`}
          />
        </Head>
        <Header
          title="Aktualności"
          subtitle={[{name: 'Gmina Zabór'}]}
          img={`/hero/${towns[random - 1]}.jpg`}
        />
        <main>
          <PostsList posts={props.posts} weather={weather} town="" amount={7} />
        </main>
      </div>
      <style jsx>{`
        main {
          max-width: 1000px;
          padding: 20px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
