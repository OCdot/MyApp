import AsyncStorage from "@react-native-async-storage/async-storage";
// import persistStore from "redux-persist/lib/persistStore";
import { persistReducer , persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { inKartReducer, laundryReducer } from "./reducer";

const persistConfig = {
    key : 'Laundry',
    storage : AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig,laundryReducer)

const store = configureStore({
    reducer : persistedReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware({
        immutableCheck : false,
        serializableCheck : false,
    })
})

let persister = persistStore(store);

export {store,persister}