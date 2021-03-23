import React from "react";

import UserProvider from "../../providers/User";
import FileProvider from "../../providers/File";
import Header from "../../components/Header";
import { Wall, Footer } from "../../theming";
import Spiner from "../../components/Spiner/Spinner";

function HomePage() {
  return (
    <UserProvider>
      <FileProvider>
        <Header />
        <Wall>
          <Spiner />
        </Wall>
        <Footer></Footer>
      </FileProvider>
    </UserProvider>
  );
}

export default HomePage;
