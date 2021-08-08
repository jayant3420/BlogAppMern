import Bmw1comp61data1 from "./bmw1comp61data1";
import Comp61data2 from "./bmw1comp61data2";
import ArrowDownImg from "./../../images/arrow-down.svg";
import ArrowRightImg from "./../../images/arrow-right.svg";
import Comp61lastcomp from "./bmw1comp61lastcomp";
import Bmw1comp621 from "./bmw1comp621.js";
import Bmw1comp622 from "./bmw1comp622.js";
import Bmw1comp623 from "./bmw1comp623.js";
import Bmw1comp624 from "./bmw1comp624.js";
import url from "./../Url/url";

import axios from "axios";
import { useState, useEffect } from "react";
const Bmw1comp6 = () => {
  const [data, setData] = useState({
    Comp6dataArr: null,
    Comp61lastcompArr: null,
    Comp62lastcompArr: null
  });

  useEffect(() => {
    const comp6data = async () => {
      const Comp6data = await axios.get(`${url}/home/homecomp6`);
      const Comp61lastcomp = await axios.get(`${url}/home/homecomp61lastcomp`);
      const Comp62lastcomp = await axios.get(`${url}/home/homecomp62lastcomp`);

      setData({
        Comp6dataArr: Comp6data.data,
        Comp61lastcompArr: Comp61lastcomp.data,
        Comp62lastcompArr: Comp62lastcomp.data
      });
    };
    comp6data();
  }, []);

  // console.log(data.Comp6dataArr, data.Comp61lastcompArr);

  return (
    <>
      <div className="bmw1-comp6">
        <div className="bmw1-comp61 flex-column">
          <div>
            {data.Comp6dataArr !== null ? (
              <Bmw1comp61data1
                itemDetail={data.Comp6dataArr[0]}
                key={data.Comp6dataArr[0].id}
              />
            ) : null}

            {data.Comp6dataArr !== null
              ? data.Comp6dataArr.map((item, index) => {
                  return index === 0 ? null : (
                    <Comp61data2 itemDetail={item} key={item.id} />
                  );
                })
              : null}

            <div className="bmw1comp61-loadmore flex-row">
              <img src={ArrowDownImg} alt="Down Arrow SVG" />
              <p>LOAD MORE</p>
              <img
                className="hidden"
                src={ArrowRightImg}
                alt="Right Arrow SVG"
              />
            </div>
          </div>
          {data.Comp61lastcompArr ? (
            <Comp61lastcomp
              compdetails={data.Comp61lastcompArr}
              key={data.Comp61lastcompArr.id}
            />
          ) : null}
        </div>
        <div className="bmw1-comp62">
          <Bmw1comp621 />
          <Bmw1comp622 />
          <Bmw1comp623 />
          {data.Comp62lastcompArr
            ? data.Comp62lastcompArr.map((item) => (
                <Bmw1comp624 itemDetail={item} key={item.id} />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Bmw1comp6;
