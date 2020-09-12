import Link from 'next/link';

export const Menu = ({close,setClose}) => {
    return(
        <>
        <div className="Menu">
            <div className="Menu__top">
                <p className="Menu__header"><span>W</span>ybierz Sołectwo</p>
                <ul className="Menu__list">
                    <li onClick={()=>setClose(!close)}  className="Menu__list__item"><Link href={`/czarna`} as={`czarna`}><a>Czarna</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/dabrowa`} as={`dabrowa`}><a>Dąbrowa</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/droszkow`} as={`droszkow`}><a>Droszków</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link replace href={`laz`} as={`laz`}><a>Łaz</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/milsko`} as={`milsko`}><a>Milsko</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/przytok`} as={`przytok`}><a>Przytok</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/tarnawa`} as={`tarnawa`}><a>Tarnawa</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/zabor`} as={`zabor`}><a>Zabór</a></Link></li>
                </ul>
            </div>
            <ul className="Menu__list">
                <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`droszkow`} as={`droszkow`}><a>Urząd Gminy</a></Link></li>
                <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`contact`} as={`contact`}><a>Kontakt z nami</a></Link></li>
            </ul>
        </div>
        <style jsx>{`
            @keyframes siup{
                from{
                    left: -300px;
                }
                to{
                    left: 0px;
                }
            }
            .Menu{
                color: #fff;
                position: fixed;
                z-index: 9;
                background-color: #222;
                width: 100%;
                height: calc(100% - 50px);
                backdrop-filter: saturate(180%) blur(20px);
                padding: 0 24px 24px;
                display: ${close ? 'flex' : 'none'};
                flex-direction: column;
                justify-content: space-between;
                @media(min-width: 600px){
                    animation: siup .5s ease-in;
                    width: 300px;
                }
                &__header{
                    font-size: 22px;
                    font-weight: 600;
                    line-height: 64px;
                    span{
                        color: #728E27;
                    }
                }
                &__list{
                    list-style-type: none;
                    &__item{
                        font-size: 20px;
                        line-height: 48px;
                    }
                }
            }
        `}</style>    
        </>
    );
}