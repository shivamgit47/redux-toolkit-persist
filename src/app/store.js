import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'; 

const persistConfig = {
    key:'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig,todoReducer)

export const store = configureStore({
    reducer : persistedReducer,
});

export const persistor = persistStore(store);
