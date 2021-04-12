import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.styles.css";

const NotFoundPage = () => (
  <section className="not-found">
    <p>Page not found , go back to <Link to="/" className="home-link">
        home
      </Link>
    </p>
    <img src="404.gif" alt="page not found" />
  </section>
);

export default NotFoundPage;
