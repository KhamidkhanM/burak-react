import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { UsersPage } from "./screens/usersPage";
import { HelpPage } from "./screens/helpPage";
import { OrdersPage } from "./screens/ordersPage";
import { ProductsPage } from "./screens/productsPage";
import { HomeNavbar } from "./components/headers/HomeNavBar";
import { OtherNavbar } from "./components/headers/OtherNavBar";
import { Footer } from "./components/footers";


function App() {
  const location = useLocation();

  return (
    <>
    {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar/>}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/member-page">
          <UsersPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}


export default App;
