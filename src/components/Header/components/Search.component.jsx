import React, { useState } from "react";

import { Input, InputControl, Span, Button } from "../../../theming";

const SearchForm = () => {
  const [find, setFind] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setFind(value);
  };

  const searchFile = ()=>{
    console.log(find);
  }

  return (
    <InputControl>
      <Input value={find} onChange={handleChange} />
      <Button btninput onClick={searchFile}>
        <Span className="mif-search"></Span>
      </Button>
    </InputControl>
  );
};

export default SearchForm;
