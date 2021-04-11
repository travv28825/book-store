import React from "react";
import { useHistory } from "react-router";

import { MenuHeader, LinkItem } from "../../../theming";

const Navigation = () => {
  
  const history = useHistory();
  const navigateTo = (path) => {
    return function handleEvent(event) {
      event.preventDefault();
      history.push(path)
    }
  };
  

  return (
    <MenuHeader>
      <LinkItem onClick={navigateTo("/")} href="/">
        <p>Inicio</p>
      </LinkItem>
      <LinkItem onClick={navigateTo("/books")} href="/doc">
        <p>Documentos</p>
      </LinkItem>
      <LinkItem onClick={navigateTo("/images")} href="/images">
        <p>Imagenes</p>
      </LinkItem>
      <LinkItem onClick={navigateTo("/videos")} href="/videos">
        <p>Videos</p>
      </LinkItem>
    </MenuHeader>
  );
};

export default Navigation;
