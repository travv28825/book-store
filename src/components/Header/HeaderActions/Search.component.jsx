import React, { useState } from "react";
import { Input, InputControl, Span, Button } from "../../../theming";

export const SearchForm = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const searchFile = () => {
    console.log(search);
  };

  return (
    <InputControl>
      <Input value={search} onChange={handleChange} />
      <Button button_in_input onClick={searchFile}>
        <Span className="mif-search"></Span>
      </Button>
    </InputControl>
  );
};
