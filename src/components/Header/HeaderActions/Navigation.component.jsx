import React from "react";
import { useHistory } from "react-router";
import { MenuHeader, LinkItem } from "../../../theming";

export const Navigation = () => {
  const history = useHistory();
  const hanldeClickLink = (event, path) => {
    event.preventDefault();
    history.push(path);
  };

  return (
    <MenuHeader>
      <LinkItem onClick={(event) => hanldeClickLink(event, "/")} href="/">
        <p>Inicio</p>
      </LinkItem>
      <LinkItem onClick={(event) => hanldeClickLink(event, "/books")} href="/doc">
        <p>Documentos</p>
      </LinkItem>
      <LinkItem onClick={(event) => hanldeClickLink(event, "/images")} href="/images">
        <p>Imagenes</p>
      </LinkItem>
      <LinkItem onClick={(event) => hanldeClickLink(event, "/videos")} href="/videos">
        <p>Videos</p>
      </LinkItem>
    </MenuHeader>
  );
};
