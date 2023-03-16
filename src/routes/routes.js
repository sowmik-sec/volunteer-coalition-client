import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
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
]);
export default router;
