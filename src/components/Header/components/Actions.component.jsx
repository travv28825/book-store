import React from "react";

import { useHistory } from "react-router";

import { MenuHeader, LinkItem } from "../../../theming";

const Actions = () => {
  const history = useHistory();

  return (
    <MenuHeader>
      <LinkItem
        onClick={(e) => {
          e.preventDefault();
          history.push("/");
        }}
        href="/"
      >
        <p>Inicio</p>
      </LinkItem>
      <LinkItem
        onClick={(e) => {
          e.preventDefault();
          history.push("/books");
        }}
        href="/doc"
      >
        <p>Documentos</p>
      </LinkItem>
      <LinkItem href="/images">
        <p>Imagenes</p>
      </LinkItem>
      <LinkItem href="/videos">
        <p>Videos</p>
      </LinkItem>
    </MenuHeader>
  );
};

export default Actions;
