import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from './redux/Reducers/productReducer';

const reducer = combineReducers({
    products: productReducer,
});

const inititalState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    inititalState,
    composeWithDevTools(applyMiddleware(...middleware)),
);
export default store;
