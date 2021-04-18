import React from "react";

import { Wall, Footer } from "../../theming";
import Spiner from "../../components/Spiner";
import DocProvider from "../../providers/Doc";

const HomePage = () => {
  return (
    <DocProvider>
        <Wall>
          <Spiner />
        </Wall>
        <Footer />
    </DocProvider>
  );
};

export default HomePage;
