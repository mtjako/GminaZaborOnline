export const Header = (props) => {
  console.log(props.subtitle);
  return (
    <>
      <footer className="Header">
        <div className="Header__overlay">
          <div className="Header__wrapper">
            <div className="Header__box">
              <div className="Header__subtitle">
                {props.subtitle.map((town, index) => (<span key={town.name}>{town.name}</span>))}
              </div>
              <h1 className="Header__title">{props.title}</h1>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .Header {
          margin-top: -50px;
          background-color: #333;
          background-image: url("${props.img}");
          background-position: center 80%;
          background-size: cover;
          width: 100%;
          height: 400px;
          color: #fff;
          &__wrapper {
            max-width: 1000px;
            height: 400px;
            margin: 0 auto;
            display: flex;
            align-items: flex-end;
            padding: 32px 20px;
          }
          &__overlay {
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 25%,
              rgba(0, 0, 0, 0.75) 100%
            );
          }
          &__title {
            font-size: 40px;
          }
          &__subtitle{
              display: flex;
              span{
                  display: block;
                  padding: 2px 10px;
                  margin-right: 10px;
                  font-weight:bold;
                  text-transform: uppercase;
                  background-color: #4F5F1B;
                  color: #fff;
              }
          }
        }
      `}</style>
    </>
  );
};
