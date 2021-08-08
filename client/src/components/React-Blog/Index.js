import PostPageWeb1Navbar from "./PPW1Navbar";
import PPW1articleFixedPart from "./PPW1_articleFixedPart";
import PPW1articleContent from "./PPW1_articleContent";
import PPW1SuggestionComponent from "./PPW1SuggestionComponent";

const PostPageWeb1 = () => {
  return (
    <>
      <div className="technology-article">
        <PostPageWeb1Navbar />
        <PPW1articleFixedPart />
        <PPW1articleContent />
        <PPW1SuggestionComponent />
      </div>
    </>
  );
};

export default PostPageWeb1;
