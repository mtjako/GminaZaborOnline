import { SectionHeader } from "../SectionHeader/SectionHeader";

export const Contact = (props) => {
    return(
        <>
        <div className="Contact">
          <SectionHeader title="Kontakt"/>
          <div className="Contact__description">
              <b>Administrator Strony</b>
              <p>Mateusz Jakowlew</p>
              <br/>
              <b>Sołtys Droszkowa</b>
              <p>Tomasz Kunc</p>
              <br/>
              <b>Rada Sołecka</b>
              <p>Agnieszka Georgiczuk</p>
              <p>Aneta Krieger</p>
              <p>Bogusława Jackowska</p>
              <p>Ewa Kostrzewska</p>
              <p>Jakub Czwojda</p>
              <p>Jarosław Śliwiński</p>
              <p>Mateusz Jakowlew</p>
          </div>  
          <img alt="team" className="Contact__img" src="/contact.svg"/>
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