import Link from 'next/link';

export const Menu = ({close,setClose}) => {
    return(
        <>
        <div className="Menu">
            <div className="Menu__top">
                <p className="Menu__header"><span>W</span>ybierz Sołectwo</p>
                <ul className="Menu__list">
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/czarna`}><a>Czarna</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/dabrowa`}><a>Dąbrowa</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/droszkow`}><a>Droszków</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/laz`}><a>Łaz</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/milsko`}><a>Milsko</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/przytok`}><a>Przytok</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/tarnawa`}><a>Tarnawa</a></Link></li>
                    <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`/zabor`}><a>Zabór</a></Link></li>
                </ul>
            </div>
            <ul className="Menu__list">
                <li onClick={()=>setClose(!close)} className="Menu__list__item"><Link href={`http://www.gminazabor.pl/`}><a>Urząd Gminy</a></Link></li>
            </ul>
        </div>
        <style jsx>{`
            .Menu{
                color: #fff;
                position: fixed;
                z-index: 9;
                background-color: #191919;
                width: 300px;
                height: calc(100% - 50px);
                padding: 0 24px 24px;
                display: flex;
                transition: .25s;
                left: ${close ? '0' : '-300px'};
                flex-direction: column;
                justify-content: space-between;
                &__header{
                    cursor: default;
                    font-size: 22px;
                    font-weight: 600;
                    line-height: 64px;
                    span{
                        color: #728E27;
                        &::selection{
                            background-color: transparent;
                        }
                    }
                    &::selection{
                        background-color: transparent;
                    }
                }
                &__list{
                    list-style-type: none;
                    &__item{
                        font-size: 20px;
                        line-height: 48px;
                        cursor: pointer;
                        &:hover{
                            font-weight: bold;
                        }
                    }
                }
            }
        `}</style>    
        </>
    );
}