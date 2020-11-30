import Link from 'next/link';

export const Menu = ({close,setClose}) => {
    return(
        <>
        <div className="Menu">
            <div className="Menu__top">
                <p className="Menu__header"><span>W</span>ybierz Sołectwo</p>
                <ul className="Menu__list">
                <Link href={`/czarna`}><li onClick={()=>setClose(!close)} className="Menu__list__item">Czarna</li></Link>
                <Link href={`/dabrowa`}><li onClick={()=>setClose(!close)} className="Menu__list__item">Dąbrowa</li></Link>
                <Link href={`/droszkow`}><li onClick={()=>setClose(!close)} className="Menu__list__item">Droszków</li></Link>
                <Link href={`/laz`}><li onClick={()=>setClose(!close)} className="Menu__list__item">Łaz</li></Link>
                <Link href={`/milsko`}><li onClick={()=>setClose(!close)} className="Menu__list__item">Milsko</li></Link>
                <Link href={`/przytok`}><li onClick={()=>setClose(!close)} className="Menu__list__item">Przytok</li></Link>
                <Link href={`/tarnawa`}><li onClick={()=>setClose(!close)} className="Menu__list__item">Tarnawa</li></Link>
                <Link href={`/zabor`}><li onClick={()=>setClose(!close)} className="Menu__list__item">Zabór</li></Link>
                </ul>
            </div>
            <ul className="Menu__list">
                <Link href={`http://www.gminazabor.pl/`}><li onClick={()=>setClose(!close)} className="Menu__list__item">Urząd Gminy</li></Link>
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