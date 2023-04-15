import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Layout/Main";
import Jobs from "./components/Jobs";
import Sectors from "./components/Sectors";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ErrorPage from "./components/ErrorPage";
import CareerAdvice from "./components/CareerAdvice";


const router = createBrowserRouter([
  { path: "/",
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      { path:'/',
    element:<Home></Home>
  },
  {
    path:'/jobs',
    element: <Jobs></Jobs>
  },
  {
    path:'/careerAdvice',
    element:<CareerAdvice></CareerAdvice>
  },
  {
    path:'/sector',
    element:<Sectors></Sectors>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/signup',
    element:<Signup></Signup>
  }
 
    ]
 }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
