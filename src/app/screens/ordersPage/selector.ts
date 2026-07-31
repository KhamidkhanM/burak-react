import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";


const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrieveRestaurant = createSelector(
    selectOrdersPage,
    (OrdersPage) => OrdersPage.pausedOrders
);

export const retrieveChosenProduct = createSelector(
    selectOrdersPage,
    (OrdersPage) => OrdersPage.processOrders
);

export const retrieveProducts = createSelector(
    selectOrdersPage,
    (OrdersPage) => OrdersPage.finishedOrders
); 