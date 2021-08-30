import "./home.css";
import "./homeVideoCard.css";
import EllipsisText from "react-ellipsis-text";

function Home(){
    return(
        <div className="home">
            <div className="home__heading">
                <h2>Just for you</h2>   
            </div>
            <div className="home__videoContainer">
                  <VideoCard
                    uploadTime={data.uploadTime}
                    views={data.views}
                    thumbnail={data.thumbnail}
                    channelImg={data.channelImg}
                    title={data.title}
                    channelName={data.channelName}
                />
                <VideoCard
                    uploadTime={data.uploadTime}
                    views={data.views}
                    thumbnail={data.thumbnail}
                    channelImg={data.channelImg}
                    title={data.title}
                    channelName={data.channelName}
                />
                <VideoCard
                    uploadTime={data.uploadTime}
                    views={data.views}
                    thumbnail={data.thumbnail}
                    channelImg={data.channelImg}
                    title={data.title}
                    channelName={data.channelName}
                />
                <VideoCard
                    uploadTime={data.uploadTime}
                    views={data.views}
                    thumbnail={data.thumbnail}
                    channelImg={data.channelImg}
                    title={data.title}
                    channelName={data.channelName}
                />
                 <VideoCard
                    uploadTime={data.uploadTime}
                    views={data.views}
                    thumbnail={data.thumbnail}
                    channelImg={data.channelImg}
                    title={data.title}
                    channelName={data.channelName}
                />
                 <VideoCard
                    uploadTime={data.uploadTime}
                    views={data.views}
                    thumbnail={data.thumbnail}
                    channelImg={data.channelImg}
                    title={data.title}
                    channelName={data.channelName}
                />
                 <VideoCard
                    uploadTime={data.uploadTime}
                    views={data.views}
                    thumbnail={data.thumbnail}
                    channelImg={data.channelImg}
                    title={data.title}
                    channelName={data.channelName}
                />
                 <VideoCard
                    uploadTime={data.uploadTime}
                    views={data.views}
                    thumbnail={data.thumbnail}
                    channelImg={data.channelImg}
                    title={data.title}
                    channelName={data.channelName}
                />
                 <VideoCard
                    uploadTime={data.uploadTime}
                    views={data.views}
                    thumbnail={data.thumbnail}
                    channelImg={data.channelImg}
                    title={data.title}
                    channelName={data.channelName}
                />
                 <VideoCard
                    uploadTime={data.uploadTime}
                    views={data.views}
                    thumbnail={data.thumbnail}
                    channelImg={data.channelImg}
                    title={data.title}
                    channelName={data.channelName}
                />
                 <VideoCard
                    uploadTime={data.uploadTime}
                    views={data.views}
                    thumbnail={data.thumbnail}
                    channelImg={data.channelImg}
                    title={data.title}
                    channelName={data.channelName}
                />
            </div>
        </div>
    )
}


function VideoCard(props) {
  return (
    <div className="videoCard">
      <div className="videoCard__thumbnail">
        <img src={props.thumbnail} alt="" />
      </div>
      <div className="videoCard__info">
        <div className="videoCard__info__channelImg">
          <img src={props.channelImg} alt="loading" />
        </div>
        <div className="videoCard__info__text">
          <div className="videoCard__info__text__videoTitle"><EllipsisText text={props.title} length={45} /></div>
          <div className="videoCard__info__text__lower">
            <div className="videoCard__info__text__lower__channelName">
              <EllipsisText text={props.channelName} length={20} />
            </div>
            <div className="videoCard__info__text__lower__views">
              {props.views} • {props.uploadTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const data = {
  title: "I have something very good and | good very good excellent ",
  channelName: "Dramebazzz",
  views: "1.9M",
  uploadTime: "2 weeks ago",
  thumbnail:
    "https://cdn.pixabay.com/photo/2021/08/22/15/39/kid-6565461_960_720.jpg",
  channelImg: "https://avatar.skype.com/v1/avatars/freezyme029/public?size=s"
};

export default Home;