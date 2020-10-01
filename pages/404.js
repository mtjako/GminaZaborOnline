import Head from 'next/head';
export default (props) =>{

    return(<>
        <Head>
            <link rel="icon" href="/favicon.svg" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141206406-4"></script>
            <script
                dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-141206406-4');
                `
                }}
            />
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