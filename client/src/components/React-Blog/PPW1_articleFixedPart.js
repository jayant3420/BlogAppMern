import { useState, useEffect } from "react";
import url from "./../Url/url";
import axios from "axios";
const PPW1_articleFixedPart = () => {
  const [fixedpartdata, setFixedPartData] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/reactblog`)
      .then((response) => {
        setFixedPartData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return fixedpartdata[0] ? (
    <>
      <div className="fixed-shareable-items">
        <p className="clapping-text">
          <img src={`/${fixedpartdata[0].imgSrc}`} alt="clapping" />
          <span>{fixedpartdata[0].totalSubscriber}</span>
        </p>

        <p className="share-text">
          <img src={`/${fixedpartdata[1].imgSrc}`} alt="clapping" />
          <span>{fixedpartdata[1].title}</span>
        </p>
      </div>
    </>
  ) : null;
};

export default PPW1_articleFixedPart;
