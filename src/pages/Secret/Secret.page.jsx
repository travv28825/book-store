import React from 'react';
import { Link } from 'react-router-dom';

function SecretPage() {
  return (
    <section>
      <pre>
        welcome, voyager...
        <Link to="/"> ← go back</Link>
      </pre>
    </section>
  );
}

export default SecretPage;
