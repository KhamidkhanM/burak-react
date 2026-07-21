import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";


import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector"
import { Product } from "../../../lib/types/product";

/** REDUX SLICE SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes }),
);

export default function HomePage() {
  // Selector: Store => Data
  const dispatch = useDispatch();
  const { setPopularDishes } = actionDispatch(dispatch);
  const { popularDishes } = useSelector(popularDishesRetriever);

  console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
    // Backend server data request => Data
    // Slice: Data => Store
    const result = [
       {
        "_id": "6a3a23e86e3741795ecb1473",
        "productStatus": "PROCESS",
        "productCollection": "DISH",
        "productName": "Steak",
        "productPrice": 12,
        "productLeftCount": 100,
        "productSize": "NORMAL",
        "productVolume": 1,
        "productDesc": "This is a world-class steak prepared by our best chefs",
        "productImages": [
            "uploads/products/201325b0-015f-4d06-97f0-db66332a07c5.jpg",
            "uploads/products/a7db8c2c-4530-4ff1-9f8e-8bf1f62690d5.jpg",
            "uploads/products/fbc1fe4a-a63a-49af-a012-19c4c1f24bd8.jpg"
        ],
        "productViews": 0,
        "createdAt": "2026-06-23T06:12:56.120Z",
        "updatedAt": "2026-06-23T06:37:06.148Z",
        "__v": 0
    }
    ];
    // @ts-ignore
    setPopularDishes(result);
  }, []);

console.log("popularDishes:", popularDishes);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
