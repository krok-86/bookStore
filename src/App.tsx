import { Route, Routes, BrowserRouter } from "react-router-dom";

import PersonalArea from "./componets/SecondPage/PersonalArea/PersonalArea.tsx";
import Registration from "./componets/SecondPage/Registration/Registration.tsx";
import Basket from "./componets/SecondPage/Basket/Basket.tsx";
import Favorite from "./componets/SecondPage/Favorite/Favorite.tsx";
import AboutCompany from "./componets/SecondPage/AboutCompany/AboutCompany.tsx";
import Delivery from "./componets/SecondPage/Delivery/Delivery.tsx";
import Payment from "./componets/SecondPage/Payment/Payment.tsx";
import Contacts from "./componets/SecondPage/Contacts/Contacts.tsx";
import Articles from "./componets/SecondPage/Articles/Articles.tsx";
import Reviews from "./componets/SecondPage/Reviews/Reviews.tsx";
import NewGoods from "./componets/SecondPage/NewGoods/NewGoods.tsx";
import UnitOfGoods from "./componets/commoneComponents/UnitOfGoods/UnitOfGoods.tsx";
import HomePage from "./HomePage.tsx";
import NavBar from "./componets/FirstPage/NavBar/NavBar";
import Footer from "./componets/FirstPage/Footer/Footer";
import Brands from "./componets/SecondPage/Brends/Brends.tsx";
import Sale from "./componets/SecondPage/Sale/Sale.tsx";
import AppStyled from "./AppStyled.ts";
import AllGoods from "./componets/SecondPage/AllGoods/AllGoods.tsx";
// import GoodBlock from "./componets/commoneComponents/GoodBlock/GoodBlock.tsx";

const App = () => {
  const router = [
    {
      path: "/",
      element: (
        <div>
          <HomePage />
        </div>
      ),
    },
    {
      path: "personalArea",
      element: <PersonalArea />,
    },
    {
      path: "registration",
      element: <Registration />,
    },
    {
      path: "aboutCompany",
      element: <AboutCompany />,
    },
    {
      path: "delivery",
      element: <Delivery />,
    },
    {
      path: "payment",
      element: <Payment />,
    },
    {
      path: "contacts",
      element: <Contacts />,
    },
    {
      path: "articles",
      element: <Articles />,
    },
    {
      path: "reviews",
      element: <Reviews />,
    },
    {
      path: "allGoods",
      element: <AllGoods />,
    },
    {
      path: "newGoods",
      element: <NewGoods />,
    },
    {
      path: "unitOfGoods",
      element: <UnitOfGoods />,
    },
    {
      path: "brands",
      element:<Brands />,
    },
    {
      path: "sale",
      element:<Sale />,
    },
    {
      path: "favorite",
      element: <Favorite />,
    },
    {
      path: "basket",
      element: <Basket />,
    },
    {
      path: "/:category/:subcategory",
      element: <NewGoods /> ,
    },
    {
      path: "/:category/:subcategory/:1",
      element: <UnitOfGoods /> ,
    },
    
    // {
    //   path: "http://127.0.0.1:5173/",
    //   element:<App />,
    // },
  ];
  return (
    <BrowserRouter>
    <AppStyled>
      <NavBar />

      <Routes>
        {router.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Routes>
      <Footer />
      </AppStyled>
    </BrowserRouter>
  );
};

export default App;
