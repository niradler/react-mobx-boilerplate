import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'mobx-react';
import PagesStore from './store/PagesStore';

import { BrowserRouter } from 'react-router-dom'

const Root = (
    <Provider PagesStore={PagesStore}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
)
ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
