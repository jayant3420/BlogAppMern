const Bmw1comp624 = (props) => {
  let comp624 = props.itemDetail;
  return (
    <>
      <div className="bmw1comp624">
        <div>
          <hr />
        </div>
        <div className="bmw1comp624-imgbox flex-row">
          <div className="bmw1comp624-img">
            <img src={`/${comp624.imgSrc}`} alt="Comp624 Logo" />
          </div>
          <div className="bmw1comp624-imginfo-box flex-column">
            <div className="bmw1comp624-imginfo1 flex-row">
              <p>{comp624.title}</p>
              <p>{comp624.id}</p>
            </div>
            <div className="bmw1comp624-imginfo-date">
              <span>{comp624.dateTitle}</span>
              <span>{comp624.date}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bmw1comp624;
