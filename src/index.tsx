import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/App'
import { test } from './fn';
import { fn2 } from './fn2';
test(2);
fn2();

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);