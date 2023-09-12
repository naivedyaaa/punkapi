import React, { Children, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from './components/Body'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import Beer from './components/Beer'
import Error from './components/Error'
import PUNK_API from "../src/constants";

App = () => {
  return(
    <>
      <Outlet />
    </>
  );
};

router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/beer/:id",
        element:<Beer/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);


