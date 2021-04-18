import HomePage from "../../pages/Home";
import LoginPage from "../../pages/Login";
import UserProfile from '../../pages/UserProfile';
import NotFound from "../../pages/NotFound";

const routes = [
  {
    path: "/login",
    component: LoginPage,
    isPrivate: false,
  },
  {
    path: "/",
    component: HomePage,
    isPrivate: false,
  },
  {
    path: "/profile",
    component: UserProfile,
    isPrivate: true,
  },
  {
    path: "/*",
    component: NotFound,
    isPrivate: true,
  },
];

export default routes;
