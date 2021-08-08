import { TravelDetail } from "./BlogMainWeb2TravelDetails.js";
import { useState, useEffect } from "react";
import url from "./../Url/url";
import axios from "axios";
const ArticleLeft = () => {
  const [BollywoodArticleLeftData, setBollywoodArticleLeftData] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/bollywood`)
      .then((response) => {
        setBollywoodArticleLeftData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="blogmainweb2-left-article">
        <div className="bw">
          <h1>Bollywood</h1>
          <hr />
        </div>
        {BollywoodArticleLeftData.map((item) => (
          <TravelDetail td={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default ArticleLeft;
