import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main'
import Topics from "../components/Topics/Topics";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Topics />,
      },
      {
        path: "/staitistics",
        element: <Statistics/>
      },
      {
        path: "/blog",
        element: <Blog/>
      }
    ],
  },
]);