import ArticleFooter from "./PPW1_articleFooter";
import ArticleHeader from "./PPW1_articleHeader";
import ArticleMainContent from "./PPW1_articleMainContent";
import { BrowserRouter } from "react-router-dom";

const ArticleContent = () => {
  return (
    <>
      <div className="main-content">
        <ArticleHeader />
        <ArticleMainContent />
        <BrowserRouter>
          <ArticleFooter />
        </BrowserRouter>
      </div>
    </>
  );
};

export default ArticleContent;
