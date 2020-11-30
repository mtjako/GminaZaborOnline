import { SectionHeader } from "./SectionHeader/SectionHeader";
import Image from 'next/image'

export const Church = (props) => {
    return(
        <>
        <div className="Church">
          <SectionHeader title="Kościół"/>
          <Image quality={50} width={250} height={250} alt="church" className="Church__img" src="/church.svg"/>
            <div className="Church__schedule">
              <h3>Msze Święte</h3>
              <b>Niedziela</b>
              <p>08:00 - Przytok</p>
              <p>09:30 - Jany</p>
              <p>11:00 - Droszków</p>
              <p>12:30 - Przytok</p>
              <p>17:30 - Droszków</p>
              <br/>
              <b>Dni powszednie</b>
              <p>Jany - Wtorek 18:00</p>
              <p>Przytok - Środa i Piątek 18:00</p>
              <p>Droszków - Czwartek i Sobota 18:00</p>
            </div>
            <div className="Church__contact">
              <h3>Kontakt</h3>
              <p> 
                <b>Parafia p.w. Wniebowzięcia NMP w Przytoku</b><br/>
                ul. Kisielińska 8<br/>
                66-003 Przytok<br/>
                tel. 68 323 06 41<br/>
                tel. kom. 570 282 520
              </p>
            </div>


        </div>
        <style jsx>{`
            .Church{
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 32px;
            @media(max-width: 627px){
            justify-content: center;
            text-align: center;
            &__contact, &__schedule{
              margin-top: 24px;
            }
            }
            b{
            font-size: 18px;
            }
            &__img{
            margin-top: 16px;
            width: 225px;
            height: 225px;
            }
            &__contact, &__schedule{
                width: 300px;
                h3{
                  font-size: 24px;
                  margin-bottom: 8px;
                }
            }
            }
        `}</style>    
        </>
    );
}