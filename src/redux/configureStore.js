import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';  //create saga middle ware
import counterReducer from './reducer/counter'
import userReducer from './reducer/user'
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]; //create array of middleware require, here sagamiddleware, logmiddleware etc

const store = createStore(reducer,{}, composeEnhancers(applyMiddleware(...middleware))); //second parameter enhancer

sagaMiddleware.run(watcherSaga); //runs consatanty in the background and listens for the any redux functions

export default store;
