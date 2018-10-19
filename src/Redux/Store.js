import { persistStore, persistReducer } from "redux-persist";
import { createStore } from "redux";
import { storage } from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, reducer)

/* export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
} */

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor }