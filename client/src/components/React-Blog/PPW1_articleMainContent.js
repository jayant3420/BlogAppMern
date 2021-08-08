import { useState, useEffect } from "react";
import url from "./../Url/url";
import axios from "axios";
const ArticleMainContent = () => {
  const [maincontent, setMainContent] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/reactblog/reactmaincontent`)
      .then((response) => {
        setMainContent(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return maincontent[0] ? (
    <>
      <div className="article-main-content">
        <div className="react-img">
          <img src={`/${maincontent[0].imgSrc1}`} alt="ReactImage" />
        </div>
        <div className="react-article">
          <p>{maincontent[0].para1}</p>
          <p>{maincontent[0].para2}</p>
        </div>
        <div className="react-code-img">
          <img src={`/${maincontent[0].imgSrc2}`} alt="ReactImage" />
        </div>
      </div>
    </>
  ) : null;
};

export default ArticleMainContent;
