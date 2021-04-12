import React, { useState } from "react";

import {
  Input,
  SearchControl,
  InputControl,
  Span,
  Button,
} from "../../../theming";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <SearchControl>
      <InputControl>
        <Input value={search} onChange={handleChange} />
        <Button button_in_input>
          <Span className="mif-search"></Span>
        </Button>
      </InputControl>
    </SearchControl>
  );
};

export default SearchForm;
