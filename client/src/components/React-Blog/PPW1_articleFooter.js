import { Link } from "react-router-dom";
import url from "./../Url/url";
import { useState, useEffect } from "react";
import axios from "axios";
const ArticleFooter = () => {
  const [footerdata, setFooterData] = useState({
    links: null,
    authorDetails: null
  });
  useEffect(() => {
    const footerDataFetch = async () => {
      const footerlinks = await axios.get(`${url}/reactblog/footerlinks`);
      const footerautordetails = await axios.get(
        `${url}/reactblog/footerautordetails`
      );
      setFooterData({
        links: footerlinks.data,
        authorDetails: footerautordetails.data
      });
    };
    footerDataFetch();
  }, []);

  return footerdata.links !== null && footerdata.authorDetails !== null ? (
    <>
      <div className="article-footer">
        <div className="footer-course-name">
          <>
            {footerdata.links.map((item, index) => (
              <Link className="react-link link-btn" to="#" key={item.id}>
                {item.title}
              </Link>
            ))}
          </>
        </div>
        <div className="footer-clap">
          <div className="footer-clap-img">
            <img
              src={`/${footerdata.authorDetails[0].clappingImgSrc}`}
              alt="clap"
            />
          </div>
          <div className="footer-clap-text">
            <p>{footerdata.authorDetails[0].totalSubscriber}</p>
          </div>
        </div>
        <hr className="underline" />
        <div className="article-footer-img-block">
          <div className="article-footer-img">
            <img
              src={`/${footerdata.authorDetails[0].maskImgSrc}`}
              alt="article footer authorImage"
            />
          </div>
          <div className="article-footer-img-text">
            <p>WRITTEN BY</p>
            <p>{footerdata.authorDetails[0].authorName}</p>
            <p>{`${footerdata.authorDetails[0].articleWrittenDate} . 10 min read`}</p>
          </div>
        </div>
        <hr className="underline" />
      </div>
    </>
  ) : null;
};

export default ArticleFooter;
