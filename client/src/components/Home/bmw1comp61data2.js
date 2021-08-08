const Bmw1comp61data2 = (props) => {
  let item = props.itemDetail;
  return (
    <>
      <div className="comp61-data2-outerbox">
        <div>
          <hr />
        </div>
        <div className="comp61-data2-imgbox flex-row">
          <div className="comp61-data2-img">
            <img src={`/${item.imgSrc}`} alt="River Logo" />
          </div>
          <div className="comp61-data2-imginfo flex-column">
            <p>{item.title}</p>
            <p>{item.para}</p>
            <p className="hidden">
              Gujarat is vastly underrated and it’s a mystery to us
            </p>
            <p>
              <span>{item.dateTitle}</span>
              <span>{item.date}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bmw1comp61data2;
