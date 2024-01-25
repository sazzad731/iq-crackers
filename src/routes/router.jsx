import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main'
import Topics from "../components/Topics/Topics";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";
import Quiz from "../components/Quiz/Quiz";
import Error404 from "../components/Error404/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: ()=>fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Topics />,
      },
      {
        path: '/quiz/:quizId',
        loader: ({params})=>{
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          );
        },
        element: <Quiz/>
      },
      {
        path: "/staitistics",
        loader: ()=>fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Statistics/>
      },
      {
        path: "/blog",
        loader: ()=>{
          return fetch("question.json");
        },
        element: <Blog/>
      }
    ],
  },
  {
    path: '*',
    element: <Error404/>
  }
]);