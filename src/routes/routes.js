import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login/Login";
import NotFound from "../components/Login/NotFound/NotFound";
import Register from "../components/Login/Register/Register";
import RegisterHere from "../components/Login/RegisterHere/RegisterHere";
import Services from "../components/Services/Services";
import User from "../components/User/User";
import Main from "../layout/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/services",
    element: <Services />,
    loader: () => fetch(`http://localhost:5000/services`),
  },
  {
    path: "/register-here",
    element: <RegisterHere />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/register-here",
        element: <Register />,
      },
    ],
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
