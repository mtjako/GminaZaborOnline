import { SectionHeader } from "../SectionHeader/SectionHeader";

export const Church = (props) => {
    return(
        <>
        <div className="Church">
          <SectionHeader title="Kościół"/>
          <img alt="church" className="Church__img" src="/church.svg"/>
          <div className="Church__description">
            <table>
   
            </table>
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
            }
            b{
            font-size: 18px;
            }

            &__img{
            margin-top: 16px;
            width: 200px;
            height: 200px;
            }
            &__description{
                margin-top: 16px;
                margin-left: 100px;
                width: calc(100% - 300px);
            }
            }
        `}</style>    
        </>
    );
}