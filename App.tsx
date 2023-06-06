import React, {FC} from 'react';
import {Provider} from 'react-redux';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import FlashMessage from 'react-native-flash-message';

const App: FC = () => {
  return (
    <Provider store={store}>
      <FlashMessage position="top" />
      <Routes />
    </Provider>
  );
};

export default App;
