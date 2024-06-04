import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Store/index';
import HomeScreen from './src/Screens/HomeScreen';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { glueStackConfig } from './src/Utils/gluestack-config';

const App = () => (
    <GluestackUIProvider config={glueStackConfig}>
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    </GluestackUIProvider>

);

export default App;
