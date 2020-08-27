
export const Weather = (props) => {
    // console.log("propsy: ",props.weather);
    let weather = 'null';
    switch(props.weather.weather[0].main){
        case "Clouds": weather = "Chmury"; break;
        case "Thunderstorm": weather = "Burza"; break;
        case "Drizzle": weather = "Mżawka"; break;
        case "Rain": weather = "Deszcz"; break;
        case "Snow": weather = "Śnieg"; break;
        case "Clear": weather = "Czyste Niebo"; break;
        default: weather = "Błąd"; break;
    }

    return(
        <>
        <div className="Weather">
            <p className="Weather__location">Gmina Zabór</p>
            <p className="Weather__temperature" >{parseInt(props.weather.main.temp)}°</p> 
            <div className="Weather__wrapper">
                <p className="Weather__type">{weather}</p>
                <img alt="weatherIcon" className="Weather__img" src={'/weather/' + props.weather.weather[0].icon + '.svg'}/>
            </div>
        </div>
        <style jsx>{`
            .Weather{
                background-color: #0001;
                border: 2px solid #999;
                width: 100%;
                height: 320px;
                border-radius: 8px;
                padding: 32px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                &__location{
                    font-weight: 600;
                    font-size: 28px;
                }
                &__temperature{
                    font-weight: 700;
                    line-height: 128px;
                    font-size: 128px;
                }
                &__wrapper{
                    margin-top: -20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }
                &__type{
                    font-size: 28px;
                }
                &__img{
                    width: 80px;
                }
            }
        `}</style>    
        </>
    );
}