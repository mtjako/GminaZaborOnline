import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getPosts } from './api/ghost';
import { Header } from '../components/Header/Header';
import { PostsList } from '../components/PostsList/PostsList';
import { Church } from '../components/Church/Church';

export async function getStaticProps(){
  const posts = await getPosts();
  return {props: {posts: posts} }
}

export default function Contact(props) {
  return (
    <>
    <div className={styles.container} className="body">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Kontakt" subtitle="Gmina Zabór" img="/hero.jpeg"/>
      <main className={styles.main}>
      <form action="https://hooks.zapier.com/hooks/catch/7820899/oabzmdv/" name="newsletter" method="post">
          <input type="hidden" name="source" value="newsletter-form"/>
          <div className="selectRadny">
            <label>Wybierz Radnego</label>
            <select name="radny" required>
                <option defaultValue="" disabled hidden>Radny...</option>
                <option value="Tomasz Kunc">Tomasz Kunc</option>
                <option value="Mateusz Jakowlew">Mateusz Jakowlew</option>
                <option value="Agnieszka Georgiczuk">Agnieszka Georgiczuk</option>
            </select>
          </div>
          <div className="selectRadny">
          <label>Wybierz rodzaj sprawy</label>
          <select name="rodzaj" required>
            <option defaultValue="" disabled hidden>Sprawa...</option>
            <option value="Problem">Problem</option>
            <option value="Propozycja">Propozycja</option>
            <option value="Inne">Inne</option>
          </select>
          </div>
          <div className="emailRadny">
          <label>Podaj swój email</label>
          <input name="email" required/>
          </div>
          <div className="contentRadny">
            <label>Treść wiadomości</label>
            <textarea name="content" rows="8" required/>
          </div>
          <button>Wyślij</button>
        </form>
      </main>
    </div>
    <style jsx>{`
      main{
        max-width: 1000px;
        padding: 20px;
        margin: 0 auto;
        form{
            width: 100%;
            @media(min-width: 600px){
                width: 400px;
            }
            display: grid;
            grid-template-columns: repeat(4,1fr);
            grid-gap: 0 20px;
            label{
                width: 100%;
                display: block;
                font-weight: 700;
                margin: 14px 0 4px;
            }
            input,select,textarea{
                width: 100%;
                display: block;
                outline: none;
                color: inherit;
                border: none;
                padding: 10px 16px;
                background-color: #0002;
                border-radius: 8px;
                resize: none;
            }
            .selectRadny{
                grid-column: span 4;
                @media(min-width: 600px){
                grid-column: span 2;
                }
            }
            .emailRadny{
                grid-column: span 4;
            }
            .contentRadny{
                grid-column: span 4;
            }
            button{
                grid-column: span 4;
                @media(min-width: 600px){
                grid-column: span 2;
                }
                margin-top: 22px;
                border-radius: 8px;
                padding: 10px 16px;
                border: none;
                background-color: #728e27;
                font-weight: 700;
                color: #fff;
            }
        }
      }
    `}</style>    
    </>
  )
}
