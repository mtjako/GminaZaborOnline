
export const Footer = (props) => {

    return(
        <>
        <footer className="Footer">
            <div className="Footer__wrapper">
                #footer
            </div>
        </footer>
        <style jsx>{`
            .Footer{
                background-color: #222;
                width: 100%;
                height: 180px;
                color: #fff;
                &__wrapper{
                    max-width: 1000px;
                    margin: 0 auto;
                }
            }
        `}</style>    
        </>
    );
}