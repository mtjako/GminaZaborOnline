import Link from 'next/link';

export const Menu = (props) => {

    return(
        <>
        <div className="Menu">
            <div className="Menu__top">
                <p className="Menu__header"><span>W</span>ybierz Miejscowość</p>
                <ul className="Menu__list">
                    <li className="Menu__list__item"><Link href={`droszkow`} as={`droszkow`}><a>Czarna</a></Link></li>
                    <li className="Menu__list__item"><Link href={`dabrowa`} as={`dabrowa`}><a>Dąbrowa</a></Link></li>
                    <li className="Menu__list__item"><Link href={`droszkow`} as={`droszkow`}><a>Droszków</a></Link></li>
                    <li className="Menu__list__item"><Link href={`laz`} as={`laz`}><a>Łaz</a></Link></li>
                    <li className="Menu__list__item"><Link href={`milsko`} as={`milsko`}><a>Milsko</a></Link></li>
                    <li className="Menu__list__item"><Link href={`przytok`} as={`przytok`}><a>Przytok</a></Link></li>
                    <li className="Menu__list__item"><Link href={`tarnawa`} as={`tarnawa`}><a>Tarnawa</a></Link></li>
                    <li className="Menu__list__item"><Link href={`zabor`} as={`zabor`}><a>Zabór</a></Link></li>
                </ul>
            </div>
            <ul className="Menu__list">
                <li className="Menu__list__item"><Link href={`droszkow`} as={`droszkow`}><a>Urząd Gminy</a></Link></li>
                <li className="Menu__list__item"><Link href={`droszkow`} as={`droszkow`}><a>Kontakt z nami</a></Link></li>
            </ul>
        </div>
        <style jsx>{`
            .Menu{
                color: #fff;
                position: absolute;
                z-index: 9;
                background-color: #000c;
                width: 80%;
                height: calc(100% - 50px);
                backdrop-filter: saturate(180%) blur(20px);
                padding: 0 24px 24px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
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