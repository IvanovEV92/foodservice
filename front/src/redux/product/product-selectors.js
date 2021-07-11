import { createSelector } from '@reduxjs/toolkit';

const getProducts = state => state.items;
const getChangeProduct = state => state.changeProduct;

// eslint-disable-next-line
export default { getProducts, getChangeProduct };
