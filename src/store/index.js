import { createStore, applyMiddleware} from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const middleWares = [thunkMiddleware];

const initialState = {};

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleWares)
)
export const persistor = persistStore(store);