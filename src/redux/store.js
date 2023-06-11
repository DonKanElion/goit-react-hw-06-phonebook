import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
// import { rootReducer } from './reducer';

export const store = configureStore({
  reducer: contactsReducer,
});
