import React from 'react';
import { render } from 'react-dom';
import globalStyles from './styles/app.scss';
import MainContainer from '@containers/MainContainer';
import config from '@data/config';
import routes from './routes';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const bootstrapApplication  = () => (
    render(<Router>{routes}</Router>,document.getElementById('app-container')));


bootstrapApplication();

if(module.hot){
    module.hot.accept();
    bootstrapApplication();
}