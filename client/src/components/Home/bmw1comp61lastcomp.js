const Comp61lastcomp = (props) => {
  let compdetail = props.compdetails[0];
  return (
    <>
      <div className="bmw1comp61-lastcomp-box">
        <div className="comp61-lastcomp">
          <img src={`/${compdetail.imgSrc}`} alt="Last Comp Logo" />
        </div>
        <div className="comp61-lastcomp-text">
          <p>{compdetail.title}</p>
          <p className="comp61-lastcomp-date">
            <span>{compdetail.dateTitle}</span>
            <span>{compdetail.title}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Comp61lastcomp;
