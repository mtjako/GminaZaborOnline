
export default (props) =>{

    return(<>
        <div className="Page404"><img src="/404.svg"/></div>
        <style jsx>{`
            .Page404{
                width: 100%;
                height: calc(100vh - 217px);
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    height: 50%;
                }
            }
        `}</style>    
        </>
    );
}