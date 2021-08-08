import { NavLink } from "react-router-dom";
import axios from "axios";
import url from "./../Url/url";
import { useState, useEffect } from "react";
const Navigation = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/home`)
      .then((response) => {
        setItemList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="blogmain-head-block">
        <div className="blogmain-heading-mb">
          <div className="blogmain-heading">
            <p>The</p>
            <p>Siren</p>
          </div>
          <div className="mb-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="blogmain-navigation-bar">
          <ul>
            <>
              {itemList.map((items, index) => {
                return (
                  <NavLink
                    to={`/${items.item}`}
                    className="navlink-normal"
                    activeClassName="active_now"
                    key={items.id}
                  >
                    <li>{items.item}</li>
                    <hr className="hidden" />
                  </NavLink>
                );
              })}
            </>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Navigation;
