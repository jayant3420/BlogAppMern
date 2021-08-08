const ArticleRightComp2 = (props) => {
  let item = props.item;
  return (
    <>
      <div className="arc2">
        <div className="arc2-box flex-row">
          <div className="arc2-img">
            <img src={`/${item.imgSrc}`} alt="Component2 Small Logo" />
          </div>
          <div className="arc2-img-detail flex-column">
            <div className="arc2-img-title-block flex-row">
              <p>{item.title}</p>
              <p>{item.id}</p>
            </div>
            <div className="arc2-img-date">
              <span>{item.dateTitle}</span>
              <span>{item.date}</span>
            </div>
          </div>
        </div>
        <div>
          <hr className="travel-location-underline" />
        </div>
      </div>
    </>
  );
};

export default ArticleRightComp2;
