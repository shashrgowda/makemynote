import Info from "./Info";
import Login from "./Login";
import Signup from "./Signup";
import Error404 from "./404";
import MyCards from "./MyCards";

function checkUser(routeTo, routeFrom, resolve, reject) {
  if (localStorage.getItem("userToken")) {
    routeTo: "/mynotes";
    resolve();
  } else {
    routeTo: "/403";
    reject();
  }
}

export default [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/mynotes",
    component: Info,
    beforeEnter: checkUser,
  },
  {
    path: "/myposts",
    component: MyCards,
    beforeEnter: checkUser,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "(/*)",
    component: Error404,
  },
];
