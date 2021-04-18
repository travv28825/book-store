import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../../providers/Auth";

// const Private = ({ component: Component, path, isPrivate, ...rest }) => {
//   const { authenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isPrivate && !Boolean(authenticated) ? (
//           <Redirect to={{ pathname: "/login" }} />
//         ) : (
//             <Component {...props} />
//         )
//       }
//     />
//   );
// };
const Private = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default Private;
