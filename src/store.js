import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createMigrate,
    persistStore,
    persistCombineReducers,
    REHYDRATE,
    PURGE,
} from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const persistConfig = {
    version: 1,
    key: "root",
    storage: AsyncStorage,
    timeout: null,
    whitelist: [
        // reducers
    ],
    stateReconciler: hardSet,
};
const persistedReducer = persistCombineReducers(persistConfig, {
    // reducers
});
const middlewares = [thunk];
const store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middlewares))
    // compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),

);
const persistor = persistStore(store, null, () => {
    store.getState();
});
export { store, persistor };