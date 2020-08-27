import { PostTile } from "../PostTile/PostTile";
import { Weather } from "../Weather/Weather";
import Link from 'next/link';

export const PostsList = (props) => {
    let counter = 0;
    return(
        <>
        <div className="PostsList">
            <ul>
            {props.posts.map((post,index) => {
                let town = false;
                post.tags.forEach(element => {if(element.name.includes(props.town)){town=true}});

                if(index<props.amount && town == true){ ++counter; return(  
                    <li key={post.id}>
                        <Link href={`posts/[slug]`} as={`posts/${post.slug}`}>
                            <a><PostTile post={post} size={counter!=1 ? true : false}/></a> 
                        </Link>
                    </li>
                )}
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