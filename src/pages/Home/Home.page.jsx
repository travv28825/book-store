import React from "react";

import Header from "../../components/Header";
import { Wall, Footer } from "../../theming";
import Spiner from "../../components/Spiner";
import DocProvider from "../../providers/Doc";

const HomePage = () => (
  <DocProvider>
    <Header />
    <Wall>
      <Spiner />
    </Wall>
    <Footer />
  </DocProvider>
);

export default HomePage;
