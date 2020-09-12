import { PostTile } from "../PostTile/PostTile";
import { Weather } from "../Weather/Weather";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export const PostsList = (props) => {
    const [goto, setGoto] = useState([]);
    useEffect(() => {
        props.posts.map(post =>{
            post.tags.forEach(tag =>{
                if(tag.name.includes(props.town)){
                    setGoto(goto => [...goto,post]);
                }
            })
        })
    }, []);
    let counter = 0;
    return(
        <>
        <div className="PostsList">
            <ul>
            {goto.map((post,index)=>{
            return index<7 ?(
                <li key={post.id}>
                    <Link href={`posts/[slug]`} as={`posts/${post.slug}`}>
                        <a><PostTile post={post} size={index!=0 ? true : false}/></a> 
                    </Link>
                </li>
            ): null;
            })}
            <li key="weather" id="weather"><Weather weather={props.weather}/></li>
            </ul>
        </div>
        <style jsx>{`
            .PostsList{
                width: 100%;
                ul{
                    margin: 25px 0 50px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-gap: 20px;
                    list-style-type: none;
                    @media(min-width: 680px){
                        grid-template-columns: repeat(2, 1fr);
                    }
                    @media(min-width: 1000px){
                        grid-template-columns: repeat(3, 1fr);
                    }
                    li{
                        @media(min-width: 1000px){
                            &:nth-child(1){
                                grid-column: span 2;
                                order: -2;
                            }   
                        }
                    }
                }
                #weather{
                    order: -1;
                }
            }
        `}</style>    
        </>
    );
}