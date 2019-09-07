import {createStore, applyMiddleware, compose} from 'redux';
import {reducers, rootSagas} from '../reducers';
import createSagaMiddleware from 'redux-saga';
import {persistCombineReducers} from 'redux-persist';
import {AsyncStorage} from 'react-native';

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
  whitelist: ['toggle'],
};

const reducer = persistCombineReducers(persistConfig, reducers);

export default function configureStore() {
  const createStoreWithMiddleware = compose(applyMiddleware(...middleware))(
    createStore,
  );
  const store = createStoreWithMiddleware(reducer);
  sagaMiddleware.run(rootSagas);

  return {store};
}
