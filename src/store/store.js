import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers/app_reducers';

const rootReducers = combineReducers({
    appReducers: appReducers,
});

const configureStore = () => createStore(rootReducers, applyMiddleware(thunk));

export default configureStore;
