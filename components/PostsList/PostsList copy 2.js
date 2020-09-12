import { PostTile } from "../PostTile/PostTile";
import { Weather } from "../Weather/Weather";
import Link from 'next/link';

export const PostsList = (props) => {
    let counter = 0;
    console.log('render');
    return(
        <>
        <div className="PostsList">
            <ul>
            {props.posts.map((post,index) => {//mapa postów
            console.log(1);
                post.tags.forEach(element => {//jazda po tagach pojedynczego posta
                    console.log(2);
                    if(element.name.includes(props.town)){//sprawdzanie czy tag jest zgodny z miejscowoscia
                        console.log(3,post.slug);
                        if(index<props.amount){ //ilość postów
                            console.log('>>> ', 4,' counter: ',counter);
                            ++counter; 
                            return(  
                                <li key={post.id}>
                                    <Link href={`posts/[slug]`} as={`posts/${post.slug}`}>
                                        <a><PostTile post={post} size={counter!=1 ? true : false}/></a> 
                                    </Link>
                                </li>
                            )
                        }
                    }
                });
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