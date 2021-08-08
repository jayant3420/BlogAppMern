import Comp623Img from "./../../images/gallery10.jpg";
const Bmw1comp623 = () => {
  return (
    <>
      <div className="bmw1comp623-box">
        <div className="bmw1comp623-img">
          <img src={Comp623Img} alt="Comp623 Logo" />
        </div>
        <div className="bmw1comp623-imgInfo">
          <div className="bmw1comp623-imgtitle flex-row">
            <p>Catch waves with an adventure guide</p>
            <p>1</p>
          </div>
          <div className="bmw1comp623-imgdate">
            <span>Travel</span>
            <span>/ August 21 2017</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bmw1comp623;
