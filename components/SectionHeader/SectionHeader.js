
export const SectionHeader = (props) => {

    return(
        <>
        <div className="SectionHeader">
              <h2><span>#</span>{props.title}</h2>
        </div>
        <style jsx>{`
            .SectionHeader{
                width: 100%;
                margin-bottom: 24px;
                    h2{
                    font-weight: 900;
                    font-size: 25px;
                    padding-bottom: 5px;
                    border-bottom: 3px solid #999;
                    span{
                        color: #728E27;
                    }
                }
            }
        `}</style>    
        </>
    );
}