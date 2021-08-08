import { useState, useEffect } from "react";
import url from "./../Url/url";
import axios from "axios";
import ArticleRightComp2 from "./ArticleRightComp2";
const ArticleRightComp1 = () => {
  const [BollywoodRightData, setBollywoodRightData] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/bollywood/bollywoodright`)
      .then((response) => {
        setBollywoodRightData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(BollywoodRightData);

  return BollywoodRightData[0] ? (
    <>
      <div className="arc-1">
        <div className="arc-1-img">
          <img
            src={`/${BollywoodRightData[0].imgSrc}`}
            alt="Article Right Component 1 Logo"
          />
        </div>
        <div className="arc-1-title">
          <p>{BollywoodRightData[0].title}</p>
          <p>{BollywoodRightData[0].id}</p>
        </div>
        <div className="arc-1-date">
          <span>{BollywoodRightData[0].dateTitle}</span>
          <span>{BollywoodRightData[0].date}</span>
        </div>
        <div>
          <hr className="travel-location-underline" />
        </div>
      </div>

      {BollywoodRightData.map((item, index) => {
        return index === 0 ? null : (
          <ArticleRightComp2 item={item} key={item.id} />
        );
      })}
    </>
  ) : null;
};

export default ArticleRightComp1;
