import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import RegisterHere from "../components/Login/RegisterHere/RegisterHere";
import Services from "../components/Services/Services";
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
    loader: () => fetch(`services.json`),
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
]);
export default router;
