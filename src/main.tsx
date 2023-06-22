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
import Basket from './componets/SecondPage/Basket/Basket.tsx';
import Favorite from './componets/SecondPage/Favorite/Favorite.tsx';
import AboutCompany from './componets/SecondPage/AboutCompany/AboutCompany.tsx';
import Delivery from './componets/SecondPage/Delivery/Delivery.tsx';
import Payment from './componets/SecondPage/Payment/Payment.tsx';
import Contacts from './componets/SecondPage/Contacts/Contacts.tsx';
import Articles from './componets/SecondPage/Articles/Articles.tsx';
import Reviews from './componets/SecondPage/Reviews/Reviews.tsx';
import NewGoods from './componets/SecondPage/NewGoods/NewGoods.tsx';

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
    path: "registration",
    element:<Registration />,
  },  
  {
    path: "aboutCompany",
    element:<AboutCompany />,
  },
  {
    path: "delivery",
    element:<Delivery />,
  },
  {
    path: "payment",
    element:<Payment />,
  },
  {
    path: "contacts",
    element:<Contacts />,
  },
  {
    path: "articles",
    element:<Articles />,
  },
  {
    path: "reviews",
    element:<Reviews />,
  },
  {
    path: "newGoods",
    element:<NewGoods />,
  },
  // {
  //   path: "brands",
  //   element:<Brands />,
  // },
  // {
  //   path: "sale",
  //   element:<Sale />,
  // },
  {
    path: "favorite",
    element:<Favorite />,
  },
  {
    path: "basket",
    element:<Basket />,
  },
  {
    path: "http://127.0.0.1:5173/",
    element:<App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
)
