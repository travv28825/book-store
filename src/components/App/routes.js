import HomePage from "../../pages/Home";
import LoginPage from "../../pages/Login";
import UserProfile from '../../pages/UserProfile';
import NotFound from "../../pages/NotFound";
import MainLayout, { EmptyLayout } from "../../components/Layout";

const routes = [
  {
    path: "/login",
    component: LoginPage,
    isPrivate: false,
    layout:EmptyLayout
  },
  {
    path: "/",
    component: HomePage,
    isPrivate: false,
    layout:MainLayout,
  },
  {
    path: "/profile",
    component: UserProfile,
    isPrivate: true,
    layout:MainLayout,
  },
  {
    path: "/*",
    component: NotFound,
    isPrivate: true,
    layout:EmptyLayout,
  },
];

export default routes;
