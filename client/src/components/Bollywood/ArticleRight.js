import ArticleRightAdvertise from "./ArticleRightAdvertise";
import ArticleRightComp from "./ArticleRightComp1";
import ArticleRightHeader from "./ArticleRightHeader";
const RightArticle = () => {
  return (
    <>
      <div className="blogmainweb2-right-article">
        <div>
          {/*Right Component Heading 'Top Posts' */}
          <ArticleRightHeader />
          {/*Article Right Component*/}
          <ArticleRightComp />
        </div>
        {/*Article Advertisement*/}
        <ArticleRightAdvertise />
      </div>
    </>
  );
};

export default RightArticle;
