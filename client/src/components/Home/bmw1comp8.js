import Bmw1Comp81 from "./bmw1comp81";
import RightArrowImg from "./../../images/arrow-right.svg";

const Bmw1Comp8 = () => {
  return (
    <>
      <div className="bmw1comp8">
        <div className="comp8-hr1">
          <hr />
        </div>
        <div className="comp81-container flex-row">
          <Bmw1Comp81 />
        </div>
        <div className="comp8-hr2">
          <hr />
        </div>
      </div>
      <div className="bmw1comp9 flex-row">
        <p>VIEW MORE</p>
        <img src={RightArrowImg} alt="Right Arrow Logo" />
      </div>
    </>
  );
};

export default Bmw1Comp8;
