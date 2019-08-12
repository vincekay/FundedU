// Imports: Dependencies
// import {AsyncStorage} from 'AsyncStorage';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Imports: Redux
import rootReducer from '../reducers'

// Middleware: Redux Thunk (Async/Await)
const middleware = [thunk];

// Middleware: Redux Logger (For Development)
if (process.env.NODE_ENV !== 'production') {  
  middleware.push(createLogger());
}

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage,
  // Whitelist (Save Specific Reducers)
//   whitelist: [
//     ['rootReducer'],
//   ],
  // Blacklist (Don't Save Specific Reducers)
//   blacklist: [
//     'counterReducer',
//   ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// Redux: Store
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
  store,
  persistor,
};