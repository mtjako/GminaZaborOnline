
export const MeetingInfo = () => {

    return(
        <>
        <div className="alert">
            <img src="/megaphone.svg"/>
            <p>Teatr na Kobelce / DZISIAJ 16:00</p>
        </div>
        <style jsx>{`
            @keyframes flashing{
                0%{
                    color: inherit;
                }
                40%{
                    color: #e74c3c;
                }
                60%{
                    color: #e74c3c;
                }
                100%{
                    color: inherit;
                }
            }
            .alert{
                display: flex;
                align-items: center;
                width: 100%;
                padding: 8px 16px;
                border-radius: 8px;
                background-color: #0001;
                border: 2px solid #999;
                img{
                    height: 50px;
                    margin-right: 16px;
                }
                p{
                    cursor: default;
                    font-size: 28px;
                    font-weight: bold;
                    animation: flashing 3s infinite;
                }
            }
        `}</style>    
        </>
    );
}