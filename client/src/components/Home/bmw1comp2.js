import axios from "axios";
import { useState, useEffect } from "react";
import url from "./../Url/url";
// import Img from "./../Img/img";

// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);
const Bmw1Comp2 = () => {
  const [HomeComp1Array, setHomeComp1Array] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/home/homecomp1`)
      .then((response) => {
        setHomeComp1Array(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="bmw1-comp2">
        <div className="comp21">
          <div className="comp21-img">
            <img
              src={HomeComp1Array[0] ? "/" + HomeComp1Array[0].imgSrc : null}
              alt="Comp21 Logo"
            />
          </div>
          <div className="comp21-text">
            <p>{HomeComp1Array[0] ? HomeComp1Array[0].title : null}</p>
            <p>{HomeComp1Array[0] ? HomeComp1Array[0].date : null}</p>
          </div>
        </div>
        <div className="comp22">
          <div className="comp22-img">
            <img
              src={HomeComp1Array[1] ? "/" + HomeComp1Array[1].imgSrc : null}
              alt="Comp22 Logo"
            />
          </div>
          <div className="comp22-text">
            <p>
              {HomeComp1Array[1]
                ? HomeComp1Array[1].title.split("&#&")[0]
                : null}
            </p>
            <p>
              {HomeComp1Array[1]
                ? HomeComp1Array[1].title.split("&#&")[1]
                : null}
            </p>
            <p>{HomeComp1Array[1] ? HomeComp1Array[1].date : null}</p>
          </div>
        </div>
        <div className="comp23">
          <div className="comp23-img">
            <img
              src={HomeComp1Array[2] ? "/" + HomeComp1Array[2].imgSrc : null}
              alt="Comp23 Logo"
            />
          </div>
          <div className="comp23-text">
            <p>
              {HomeComp1Array[2]
                ? HomeComp1Array[2].title.split("&#&")[0]
                : null}
            </p>
            <p>
              {HomeComp1Array[2]
                ? HomeComp1Array[2].title.split("&#&")[1]
                : null}
            </p>
            <p>{HomeComp1Array[2] ? HomeComp1Array[2].date : null}</p>
          </div>
        </div>
      </div>

      <div className="bmw1-comp2-mb hidden">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="comp21">
              <div className="comp21-img">
                <img
                  src={
                    HomeComp1Array[0] ? "/" + HomeComp1Array[0].imgSrc : null
                  }
                  alt="Comp21 Logo"
                />
              </div>
              <div className="comp21-text">
                <p>{HomeComp1Array[0] ? HomeComp1Array[0].title : null}</p>
                <p>{HomeComp1Array[0] ? HomeComp1Array[0].date : null}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="comp22">
              <div className="comp22-img">
                <img
                  src={
                    HomeComp1Array[1] ? "/" + HomeComp1Array[1].imgSrc : null
                  }
                  alt="Comp22 Logo"
                />
              </div>
              <div className="comp22-text">
                <p>
                  {HomeComp1Array[1]
                    ? HomeComp1Array[1].title.split("&#&")[0]
                    : null}
                </p>
                <p>
                  {HomeComp1Array[1]
                    ? HomeComp1Array[1].title.split("&#&")[1]
                    : null}
                </p>
                <p>{HomeComp1Array[1] ? HomeComp1Array[1].date : null}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="comp23">
              <div className="comp23-img">
                <img
                  src={
                    HomeComp1Array[2] ? "/" + HomeComp1Array[2].imgSrc : null
                  }
                  alt="Comp23 Logo"
                />
              </div>
              <div className="comp23-text">
                <p>
                  {HomeComp1Array[1]
                    ? HomeComp1Array[1].title.split("&#&")[0]
                    : null}
                </p>
                <p>
                  {HomeComp1Array[1]
                    ? HomeComp1Array[1].title.split("&#&")[1]
                    : null}
                </p>
                <p>{HomeComp1Array[1] ? HomeComp1Array[1].date : null}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Bmw1Comp2;
