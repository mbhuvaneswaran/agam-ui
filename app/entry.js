import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.scss';
import MainContainer from '@containers/MainContainer';

const bootstrapApplication  = () => (
    render(<MainContainer />,document.getElementById('app-container')));


bootstrapApplication();

if(module.hot){
    module.hot.accept();
    bootstrapApplication();
}