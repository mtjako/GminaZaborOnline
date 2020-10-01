import Head from 'next/head';
export default (props) =>{

    return(<>
        <Head>
            <link rel="icon" href="/favicon.svg" />
        </Head>
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