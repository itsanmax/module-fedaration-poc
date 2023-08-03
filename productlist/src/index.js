
// https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9

import React from 'react';

import ReactDOM from 'react-dom';
import Pdtlist from './components/pdtlist';

ReactDOM.render(
    <>
    <h1>Welcome to Product List page</h1>
    <Pdtlist></Pdtlist>
    </>,
    document.getElementById('root')
);