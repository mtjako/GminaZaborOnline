
export const PostTile = (props) => {
    const YM = props.post.published_at.split('-');
    const D = YM[2].split('T');
    const postDate = D[0]+"/"+YM[1]+"/"+YM[0];
    return(
        <>
        <div className="PostTitle">
            <div className="PostTitle__overlay">
                <h2 className="PostTitle__title">{props.post.title}</h2>
                <div className="PostTitle__author">
                    <img className="PostTitle__author__img" src={props.post.authors[0].profile_image} alt="avatar"/>
                    <div className="PostTitle__author__meta">
                        <p className="PostTitle__author__meta__name">{props.post.authors[0].name}</p>
                        <p className="PostTitle__author__meta__date">{postDate}</p>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
                .PostTitle {
                    background-image: url('${props.post.feature_image}');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: ${props.size ? '168px' : '320px'};
                    border-radius: 6px;
                    filter: saturate(132%);
                    position: relative;
                    &__overlay{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border-radius: 6px;
                        background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%);
                        color: #fff;
                        padding: 28px;
                        display: flex;
                        flex-wrap: wrap;
                        align-content: ${props.size ? 'space-between' : 'flex-end'};
                    }
                    &__title{
                        width: 100%;
                        max-height: 62px;
                        overflow: hidden;
                        font-size: 24px;
                        font-weight: 600;
                    }
                    &__author{
                        margin-top: ${props.size ? '0px' : '16px'};
                        display: flex;
                        &__img{
                            width: 36px;
                            height: 36px;
                            border-radius: 50%;
                            margin-right: 8px;
                        }
                        &__meta{
                            font-size: 14px;
                            &__name{
                                font-weight: 600;
                            }
                        }
                    }
                }

            `}</style>
        </>
    );
}