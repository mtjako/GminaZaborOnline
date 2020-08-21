import { PostTile } from "../PostTile/PostTile";
import { Weather } from "../Weather/Weather";
import Link from 'next/link';

export const PostsList = (props) => {
    return(
        <>
        <div className="PostsList">
            <ul>
            {props.posts.map((post,index) => {
                if(index==1){return(
                    <React.Fragment key="weatherandpost">
                        <li key="weather"><Weather weather={props.weather}/></li>
                        <li key={post.id}>
                            <Link href={`posts/[slug]`} as={`posts/${post.slug}`}>
                                <a><PostTile post={post} size={index ? true : false}/></a> 
                            </Link>
                        </li>
                    </React.Fragment>
                )}
                if(index<props.amount){return(          
                    <li key={post.id}>
                        <Link href={`posts/[slug]`} as={`posts/${post.slug}`}>
                            <a><PostTile post={post} size={index ? true : false}/></a> 
                        </Link>
                    </li>
                )}})}
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
                            }   
                        }
                    }
                }
            }
        `}</style>    
        </>
    );
}