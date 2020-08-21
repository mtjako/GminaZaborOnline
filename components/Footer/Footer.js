import Link from 'next/link';

export const Footer = (props) => {

    return(
        <>
        <footer className="Footer">
            <div className="Footer__wrapper">
                <div className="Footer__wrapper__logo">
                    <Link href="/">
                        <a>
                            <p className="Footer__logo"><span>G</span>mina Zabór Online</p>
                        </a>
                    </Link>
                    <div className="Footer__socialmedia">
                        <a href="#facebook"><img alt="facebook" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA8ElEQVRIS+2V0W0CMRBEZyqAXTdwHQAVJOmEEqACSAVRKiJUAHRAA7eGChb5hBFBkYhiH8oHK/nTM34er5foudizPh5rYGZbAKNCqq2qTrLGNwIz80LxbruqXnRLDXYADudDjQEMahmsSU5FZJ+JzewLwEsNgyPJRkTyyTuPmgZrVX1NojHGsbt/XF3RsJjA3T9DCLMk1LbtkuTi9mEUhezu7yGEZXUDknMAqU/2OdwYYwMgLbj7KpP8iYDkm4ikl/JjXfdQdYNz2Jsigry5twyeBrnd7/6m/z6DuwPnFwQ7VU1fd1ePHZk1ptmtRu8EJ+57vxmDUhXdAAAAAElFTkSuQmCC"/></a>
                        <a href="#instagram"><img alt="instagram" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABt0lEQVRIS8WVQUoDUQyG889OEDGZA6g3qDfQE1j3onUhIoLoCdQbiLoQXdjiAfQGegPrDeoBXh4iuHyRV2bKdDrVsaX4lvMm+ZI/eQloxgcz9k//A/Der4UQdgCsEdHyL1n2zOwlSZIOM7+U/x3JwHvfMrP7SaQDsMvM7aLtECBGbmbPkzjPbQCsFzMZAjjn2gB2/gD4iDKGEJoATqOdmXXSNG0NgEVnqtojoqUqQDRMkqQb70IIjSyQroiseu+bZvaY2fW/jQNYhfM3AE1mjvDB8d43zCzqHW1iIyzmlyIyUGZIIlUdAQBYic6993dmtp057IjIfgZ5LQdVG5Drqaq3RLRXcnQjIgdVdasNAHDCzBfOuS8AcyXAp4gsOOfO8gL/WSIzO0/T9ExVP4lovgT4EJHFaQH9llPVayI6LAGuRORIVZ+IaKN4V1uiaARglZm7qnpJRFsAYiM8MPPx1EXOouoB2IyQijaNr37QnnVqMPahEdETgD7EzBpE1Bzz4t9EJN73z7SjYoTx46iY+bCL4cx0XOf5ZgunlS2cyuFX0OY9WzjtWgtnTOEm/vw/O3nicCsMvwHrd/EZd42OigAAAABJRU5ErkJggg=="/></a>
                        <a href="#youtube"><img alt="youtube" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABFklEQVRIS+2V4U3DMBCF38sCNJcBYAPYgDABbNBuQDcoI3QD6AYwAbABbMAC8ZUFfMjFqQhKExMl/KolW7J0fl/unc8hJh6cWB9HQK/DDYtUtTSzWwCzOC96Fb4DXsJiZh9Zlm3yPN/tw9gDovhzomBnGMmrGrIHOOceAVyPAQDwJCI3jQyccyGty5EAryJS/gZYl3hI28weAJymfISI7Nz5aVEnoD5QVdUdySWAky7QYEAQVdWZ935Ncn4IMgZgFTNpZQwGqOrSzFaxTw669GdALPI9gLOEIn+KSGjWRpHfAJwnHE4Jab2mozWamW2Kolj871MRr1/pvV+QrH1O7ex3ANswSa5bH7sUY4fEHP9ova5NbtEXXad5GX2vOaIAAAAASUVORK5CYII="/></a>
                    </div>
                </div>
                <div className="Footer__wrapper__links">
                    <a>Gmina Zabór</a><a>Parafia Przytok</a>
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