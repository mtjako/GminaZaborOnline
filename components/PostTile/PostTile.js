export const PostTile = ({post,size}) => {
    const date = post.date.split('T')[0];
    const thumbnail = post.featuredImage != null ? post.featuredImage.node.srcSet.split(', ')[3].split(' ')[0] : "https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    return(
        <>
        <div className="PostTitle">
            <div className="PostTitle__overlay">
                <h2 className="PostTitle__title">{post.title}</h2>
                <div className="PostTitle__author">
                    <div className="PostTitle__author__img">
                        <img src={post.author.node.avatar.url} alt="avatar" width={36} height={36}/>
                    </div>
                    <div className="PostTitle__author__meta">
                        <p className="PostTitle__author__meta__name">{post.author.node.name}</p>
                        <p className="PostTitle__author__meta__date">{date}</p>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
                .PostTitle {
                    background-image: url('${thumbnail}');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: ${size ? '168px' : '320px'};
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
                        align-content: ${size ? 'space-between' : 'flex-end'};
                    }
                    &__title{
                        width: 100%;
                        max-height: 62px;
                        overflow: hidden;
                        font-size: 24px;
                        font-weight: 600;
                    }
                    &__author{
                        margin-top: ${size ? '0px' : '16px'};
                        display: flex;
                        &__img{
                            width: 36px;
                            height: 36px;
                            border-radius: 50%;
                            margin-right: 8px;
                            overflow: hidden;
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