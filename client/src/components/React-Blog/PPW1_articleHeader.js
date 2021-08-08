import MaskGroup16 from "./../../images/MaskGroup16.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const ArticleHeader = () => {
  return (
    <>
      <div className="article-header">
        <p>5 Ways to animate a React app.</p>
        <div className="header-img-shareable-section">
          <div className="img-section">
            <div className="author-img">
              <img src={MaskGroup16} alt="Author Pic" />
            </div>
            <div className="author-info">
              <p className="author-name">Dmitry Nozhenko</p>
              <p className="author-info-date">Jan 28, 2019 . 10 min read</p>
            </div>
          </div>
          <div className="shareable-icons">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleHeader;
