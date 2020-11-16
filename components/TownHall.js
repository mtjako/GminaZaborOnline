import { SectionHeader } from "./SectionHeader/SectionHeader";


export const TownHall = (props) => {
    return(
        <>
        <div className="TownHall">
          <SectionHeader title="Świetlica Wiejska"/>
          <img className="TownHall__img" alt="Świetlica Wiejska" src="/droszkow_swietlica.png"/>
          <div className="TownHall__description">
              <div className="TownHall__text">
                  <h3>Wynajem Świetlicy</h3>
                  <p>Jeśli jesteś zainteresowany wynajęciem świetlicy wiejskiej zapoznaj się z naszym cennikiem, a następnie skontaktuj się z sołtysem naszej miejscowości w celu ustalenia terminu najmu.</p>
                  <i><b>*</b> Do ceny najmu doliczna jest kaucja zwrotna o wyskości 500zł, nie jest ona zwracana w przypadku zniszczeń lub nie posprzątania świetlicy po najmie.</i>
              </div>
              <table className="TownHall__table">
                <tbody>
                    <tr>
                        <th></th>
                        <th>Mieszkańcy</th>
                        <th>Pozostali</th>
                    </tr>
                    <tr>
                        <td>Jednodniowa impreza</td>
                        <td>400zł*</td>
                        <td>600zł*</td>
                    </tr>
                    <tr>
                        <td>Wesele</td>
                        <td>1000zł*</td>
                        <td>1500zł*</td>
                    </tr>
                    <tr>
                        <td>Pokazy, warszaty, szkolenia</td>
                        <td>100zł/h*</td>
                        <td>100zł/h*</td>
                    </tr>
                    <tr>
                        <td>Stypa</td>
                        <td>0zł*</td>
                        <td>100zł/h*</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
        <style jsx>{`
            .TownHall{
                width: 100%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                align-items: flex-start;
                margin-bottom: 32px;
                &__img{
                    width: 100%;
                    height: auto;
                    margin-bottom: 24px;
                }
                &__description{
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                }
                &__text{
                    width: calc((100% / 3) * 1);
                    @media(max-width: 700px){
                        width: 100%;
                    }
                    h3{
                        margin-bottom: 8px;
                    }
                    i{
                        display: block;
                        margin-top: 8px;
                        font-size: 12px;
                    }
                } 
                &__table{
                    margin-left: 32px;
                    border-collapse: collapse;
                    width: calc(((100% / 3) * 2) - 32px);
                    @media(max-width: 700px){
                        width: 100%;
                        margin-left: 0;
                    }
                    text-align: center;
                    th{
                        padding: 10px;
                    }
                    td{
                        padding: 10px;
                    }
                    tr:nth-child(even){
                        background-color: #0003;
                    }
                }
            }
        `}</style>    
        </>
    );
}