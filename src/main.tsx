// import ReactDOM from 'react-dom/client'
// import App from './HomePage.tsx'
// import {createGlobalStyle} from 'styled-components'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
// import PersonalArea from './componets/SecondPage/PersonalArea/PersonalArea.tsx';
// import Registration from './componets/SecondPage/Registration/Registration.tsx';
// import Basket from './componets/SecondPage/Basket/Basket.tsx';
// import Favorite from './componets/SecondPage/Favorite/Favorite.tsx';
// import AboutCompany from './componets/SecondPage/AboutCompany/AboutCompany.tsx';
// import Delivery from './componets/SecondPage/Delivery/Delivery.tsx';
// import Payment from './componets/SecondPage/Payment/Payment.tsx';
// import Contacts from './componets/SecondPage/Contacts/Contacts.tsx';
// import Articles from './componets/SecondPage/Articles/Articles.tsx';
// import Reviews from './componets/SecondPage/Reviews/Reviews.tsx';
// import NewGoods from './componets/SecondPage/NewGoods/NewGoods.tsx';
// import UnitOfGoods from './componets/commoneComponents/UnitOfGoods/UnitOfGoods.tsx';
// import HomePage from './HomePage.tsx';

// const Global = createGlobalStyle`
// body{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// `;



// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <RouterProvider router={router} />,
// )

// import React from 'react';
import ReactDOM from 'react-dom/client'
// import { BrowserRouter} from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />,
)
