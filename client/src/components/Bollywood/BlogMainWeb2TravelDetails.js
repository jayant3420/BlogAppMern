export const TravelDetail = (props) => {
  let dataItem = props.td;
  return (
    <>
      <div className="travel-location flex-row">
        <div className="img-left">
          <img src={`/${dataItem.imgSrc}`} alt="Location Logo" />
        </div>
        <div className="img-info flex-column">
          <p>{dataItem.title}</p>
          <p className="img-para">{dataItem.para}</p>
          <p className="img-para-mb hidden">
            Gujarat is vastly underrated and it’s a mystery to us
          </p>
          <p>
            <span>{dataItem.dateTitle}</span>
            <span>{dataItem.date}</span>
          </p>
        </div>
      </div>
      <hr className="travel-location-underline" />
    </>
  );
};
