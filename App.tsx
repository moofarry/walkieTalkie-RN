import React from 'react';
import {WalkieTalkie} from './src/components/WalkieTalkie';
import {store} from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <WalkieTalkie />
    </Provider>
  );
};

export default App;
