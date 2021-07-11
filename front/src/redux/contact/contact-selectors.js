import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.loading;

const getContacts = state => state.items;

// eslint-disable-next-line
export default { getContacts };
