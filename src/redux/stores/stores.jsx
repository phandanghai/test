import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserReducer from '../slider/UserSlider';
import stateReducer from '../slider/stateSlider';
const rootReducer = combineReducers({
  user: UserReducer,
  state: stateReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['state'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
