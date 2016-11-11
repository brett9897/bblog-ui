/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
require('./favicon.ico'); // Tell webpack to load favicon.ico

render(
    <Router history={browserHistory} routes={routes} />, document.getElementById('app')
);
