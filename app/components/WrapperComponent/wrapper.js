import React, {Component} from 'react';
import SidebarComponent from '@components/SidebarComponent';
import MainComponent from '@components/MainComponent';
import styles from './style.scss';
import config from '@data/config';
let components = {};
config.headers.forEach((header) => {
    components[header.title] = require(`@components/${header.component}`);
})
export default class Wrapper extends Component {
    render() {
        return (
            <div className="container main-wrapper">
                <div className="row">
                <SidebarComponent selectedIndex={this.props.selectedIndex}/>
                <MainComponent components={components} config={config} setRoute={this.props.setRoute}/>
                </div>
                </div>
        )
    }
}