import { useState, useEffect } from "react";
import url from "./../Url/url";
import axios from "axios";
const hrTag = (tag) => {
  if (tag !== "3") {
    return (
      <div className="comp81-item-hr">
        <hr />
      </div>
    );
  } else {
    return "";
  }
};

const Bmw1Comp81 = () => {
  const [comp8data, setComp8data] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/home/homecomp8`)
      .then((response) => {
        setComp8data(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {comp8data.map((item) => (
        <div className="comp81-container-items flex-row" key={item.id}>
          <div className="comp81-item">
            <p>{item.title}</p>
            <p>{item.para}</p>
            <p>
              <span>{item.dateTitle}</span>
              <span>{item.date}</span>
            </p>
          </div>
          {hrTag(item.id)}
        </div>
      ))}
    </>
  );
};

export default Bmw1Comp81;
