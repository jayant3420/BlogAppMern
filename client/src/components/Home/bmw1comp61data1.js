const Bmw1comp61data1 = (props) => {
  let Compdata611 = props.itemDetail;
  return (
    <>
      <div className="comp61-data1">
        <div>
          <hr />
        </div>
        <div className="comp61-data1-imgbox flex-row">
          <div>
            <img src={`/${Compdata611.imgSrc}`} alt="Data1 Logo" />
          </div>
          <div className="comp61-data1-imginfo flex-column">
            <p>{Compdata611.title}</p>
            <p>{Compdata611.para}</p>
            <p className="hidden">
              Gujarat is vastly underrated and it’s a mystery to us..
            </p>
            <p>
              <span>{Compdata611.dateTitle}</span>
              <span>{Compdata611.date}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bmw1comp61data1;
