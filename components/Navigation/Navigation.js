import Link from 'next/link';
export const Navigation = (props) => {

    return(
        <>
        <nav className="Navigation">
            <div className="Navigation__wrapper">
                <Link href="/">
                    <a>
                        <p className="Navigation__logo"><span>G</span>mina Zabór Online</p>
                    </a>
                </Link>
                <div></div>
            </div>
        </nav>
        <style jsx>{`
            .Navigation{
                position: sticky;
                top: 0;
                z-index: 10;
                background: #000000cc;
                backdrop-filter: saturate(180%) blur(20px);
                width: 100%;
                height: 50px;
                color: #fff;
                &__wrapper{
                    max-width: 1000px;
                    margin: 0 auto;
                }
                &__logo{
                    line-height: 50px;
                    font-weight: 600;
                    span{
                        color: #728E27;
                    }
                }
            }
        `}</style>    
        </>
    );
}