import { ReactReduxContext } from 'react-redux';
import {combineReducers, compose, legacy_createStore} from 'redux';

// const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.
// __REDUX_DEVTOOLS_EXTENSION__()

function configureStore() {
    return legacy_createStore(
        combineReducers({

        }),
        compose(
            // ReactReduxC
        )
    )
}

export default configureStore;