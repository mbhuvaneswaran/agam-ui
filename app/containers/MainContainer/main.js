import React, { Component } from 'react';
import HeaderComponent from '@components/HeaderComponent';
import WrapperComponent from '@components/WrapperComponent';
import config from '@data/config';
class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex : 0
        }
    }
    setRoute(index) {
        this.setState({
            selectedIndex : index,
        })
    }   
    render() {
        return (
            <div className="container">
            <HeaderComponent config={config} selectedIndex={this.state.selectedIndex}/>
            <WrapperComponent config={config} setRoute={this.setRoute.bind(this)} selectedIndex={this.state.selectedIndex}/>
            </div>
            
        )
    }
}
export default MainContainer;