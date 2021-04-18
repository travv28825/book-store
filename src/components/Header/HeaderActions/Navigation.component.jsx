import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import { Navigation } from "../../../theming";

const MenuNav = () => {
  const history = useHistory();
  const navigateTo = (path) => {
    return function handleEvent(event) {
      event.preventDefault();
      history.push(path);
    };
  };

  return (
    <Navigation>
      <li>
        <Link onClick={navigateTo("/")} to="/">
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link onClick={navigateTo("/images")} to="/">
          <p>Images</p>
        </Link>
      </li>
      <li>
        <Link onClick={navigateTo("/doc")} to="/">
          <p>Documents</p>
        </Link>
      </li>
      <li>
        <Link onClick={navigateTo("/videos")} to="/">
          <p>Videos</p>
        </Link>
      </li>
    </Navigation>
  );
};

export default MenuNav;
