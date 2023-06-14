// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createGlobalStyle} from 'styled-components'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import PersonalArea from './componets/SecondPage/PersonalArea/PersonalArea.tsx';
import Registration from './componets/SecondPage/Registration/Registration.tsx';

const Global = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
    <Global/>
    <App />    
    </>
    ),
  },
  {
    path: "personalArea",
    element:<PersonalArea />,
  },
  {
    path: "registrtion",
    element:<Registration />,
  },
  {
    path: "http://127.0.0.1:5173/",
    element:<App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
)
