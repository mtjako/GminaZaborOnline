import Link from 'next/link';

export const Footer = (props) => {

    return(
        <>
        <footer className="Footer">
            <div className="Footer__wrapper">
                <div className="Footer__wrapper__logo">
                    <Link href="/">
                        <a>
                            <p className="Footer__logo"><span>G</span>mina Zabór INFO</p>
                        </a>
                    </Link>
                    <div className="Footer__socialmedia">
                        <a href="https://www.facebook.com/GminaZaborInfo" target="_blank" rel="noopener noreferrer"><img alt="facebook" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA8ElEQVRIS+2V0W0CMRBEZyqAXTdwHQAVJOmEEqACSAVRKiJUAHRAA7eGChb5hBFBkYhiH8oHK/nTM34er5foudizPh5rYGZbAKNCqq2qTrLGNwIz80LxbruqXnRLDXYADudDjQEMahmsSU5FZJ+JzewLwEsNgyPJRkTyyTuPmgZrVX1NojHGsbt/XF3RsJjA3T9DCLMk1LbtkuTi9mEUhezu7yGEZXUDknMAqU/2OdwYYwMgLbj7KpP8iYDkm4ikl/JjXfdQdYNz2Jsigry5twyeBrnd7/6m/z6DuwPnFwQ7VU1fd1ePHZk1ptmtRu8EJ+57vxmDUhXdAAAAAElFTkSuQmCC"/></a>
                        <a href="https://www.youtube.com/channel/UCee1SDn405CDuhJbnGmzGkA" target="_blank" rel="noopener noreferrer"><img alt="youtube" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABFklEQVRIS+2V4U3DMBCF38sCNJcBYAPYgDABbNBuQDcoI3QD6AYwAbABbMAC8ZUFfMjFqQhKExMl/KolW7J0fl/unc8hJh6cWB9HQK/DDYtUtTSzWwCzOC96Fb4DXsJiZh9Zlm3yPN/tw9gDovhzomBnGMmrGrIHOOceAVyPAQDwJCI3jQyccyGty5EAryJS/gZYl3hI28weAJymfISI7Nz5aVEnoD5QVdUdySWAky7QYEAQVdWZ935Ncn4IMgZgFTNpZQwGqOrSzFaxTw669GdALPI9gLOEIn+KSGjWRpHfAJwnHE4Jab2mozWamW2Kolj871MRr1/pvV+QrH1O7ex3ANswSa5bH7sUY4fEHP9ova5NbtEXXad5GX2vOaIAAAAASUVORK5CYII="/></a>
                    </div>
                </div>
                <div className="Footer__wrapper__links">
                    <a href="#" target="_blank">Polityka Prywatności</a>
                </div>
            </div>
        </footer>
        <style jsx>{`
            .Footer{
                background-color: #191919;
                width: 100%;
                color: #fff;
                &__wrapper{
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 32px 20px;
                    &__logo{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: 3px solid #777;
                    }
                    &__links{

                        line-height: 50px;
                        font-weight: 100;
                        a{
                            margin-right: 32px;
                        }
                    }
                }
                &__logo{

                    line-height: 50px;
                    font-weight: 600;
                    span{
                        color: #728E27;
                    }
                }
                &__socialmedia{
                    font-size: 16px;
                    display: flex;
                    a{
                        width: 50px;
                        height: 50px;
                        display: block;
                        padding: 13px;
                    }
                }
            }
        `}</style>    
        </>
    );
}