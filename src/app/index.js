import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../core/configureStore';
import Main from '../screens/main';

const {store} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
