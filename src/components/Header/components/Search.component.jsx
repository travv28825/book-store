import React, { useState } from "react";
import { Input, InputControl, Span, Button } from "../../../theming";
import { useFile } from "../../../providers/File";

const SearchForm = () => {
  const [find, setFind] = useState("");
  const { files, setLastFiles } = useFile();

  function change(event) {
    const { value } = event.target;
    setFind(value);
  }
  function Find() {
    const Items = files.filter(
      (target) => target.name.toLowerCase().indexOf(find.toLowerCase()) !== -1
    );
    console.log("BUSCAR::  ", Items);
    setLastFiles(Items);
  }

  return (
    <InputControl>
      <Input value={find} onChange={change} />
      <Button btninput onClick={Find}>
        <Span className="mif-search"></Span>
      </Button>
    </InputControl>
  );
};

export default SearchForm;
