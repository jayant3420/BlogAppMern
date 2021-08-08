import Card from "./cardComponent";
import url from "./../Url/url";
import { useState, useEffect } from "react";
import axios from "axios";
const SuggestionComponent = () => {
  const [suggestiondata, setSuggestionData] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/reactblog/reactsuggestiondata`)
      .then((response) => {
        setSuggestionData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="suggestionContentBox">
        <div className="suggestionContentInnerBox">
          <div className="suggestionHeading">
            <p>More From The Siren</p>
            <hr />
          </div>
          <div className="suggestionBoxImageContent">
            {suggestiondata.map((item, index) => (
              <Card cardDetails={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestionComponent;
