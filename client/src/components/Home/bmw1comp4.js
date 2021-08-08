import axios from "axios";
import url from "./../Url/url";
import { useState, useEffect } from "react";
const Bmw1comp4 = () => {
  const [Comp4data, setCompFourArray] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/home/homecomp4`)
      .then((response) => {
        setCompFourArray(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="bmw1-comp4">
        {Comp4data.map((item) => (
          <div className="bmw1-comp4-card" key={item.id}>
            <div className="comp4-card-img">
              <img src={`/${item.imgSrc}`} alt="Gallery8 Logo" />
            </div>
            <div className="comp4-card-img-details">
              <p>{item.title}</p>
              <p>{item.pata}</p>
              <p>
                <span>{item.dateTitle}</span>
                <span>{item.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bmw1comp4;
