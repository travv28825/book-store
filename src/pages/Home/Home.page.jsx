import React from "react";

import Header from "../../components/Header";
import { Wall, Footer } from "../../theming";
import Spiner from "../../components/Spiner/Spinner";

function HomePage() {
  return (
    <>
      <Header />
      <Wall>
        <Spiner />
      </Wall>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
