import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Rainbow from './components/rainbow';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Root />,
        document.getElementById('root'),
    );
})

const Root = () => {
    return(
    <BrowserRouter>
        <Rainbow />
    </BrowserRouter>
    )
}
