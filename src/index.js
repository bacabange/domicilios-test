import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/integration/react'

import store from './data/store';

const STORE = store();


ReactDOM.render(
    <Provider store={STORE.store}>
        <PersistGate loading={null} persistor={STORE.persistor}>
            <Home />
        </PersistGate>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
