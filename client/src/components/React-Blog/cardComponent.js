const card = (props) => {
  let card = props.cardDetails;
  return (
    <>
      <div className="box">
        <p className="gallary-title">{card.imgHeading}</p>
        <div className="gallery-text-mb hidden">
          <p>{card.hiddenText.para}</p>
          <p>{card.hiddenText.name}</p>
        </div>
        <div className="gallary-img">
          <img src={`/${card.imgSrc}`} alt="TempleImage" />
        </div>
        <p className="gallary-img-info">{card.imgTitle}</p>
        <div className="gallary-authorDetail-box">
          <div className="gallary-authorImage">
            <img
              src={`/${card.imgAuthorDetails.authorImgSrc}`}
              alt="authorImage"
            />
          </div>
          <div className="gallary-authorInfo">
            <p>{card.imgAuthorDetails.authorName}</p>
            <p>{`${card.imgAuthorDetails.date} . 4 min read`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
