import { SectionHeader } from "../SectionHeader/SectionHeader";
import data from "../../public/data"
import Image from 'next/image'

export const Contact = (props) => {
    let town = {};
    data.forEach(element => {
        if(element.name == props.town){
            town = element;
        }
    });
    return(
        <>
        <div className="Contact">
          <SectionHeader title="Kontakt"/>
          <div className="Contact__description">
              <b>Sołtys</b>
              <p>{town.soltys}</p>
              <br/>
              <b>Rada Sołecka</b>
              {town.rada.map((name,index)=><p key={index}>{name}</p>)}
              <br/>
              <b>Administrator Strony</b>
              <p>{data[0].name}</p>
          </div>  
          <Image quality={50} width={300} height={300} alt="team" className="Contact__img" src="/contact.svg"/>
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
        `}</style>    
        </>
    );
}