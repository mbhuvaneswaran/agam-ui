import React, {Component} from 'react';

export default class MainComponent extends Component {
    componentWillMount() {
        this.props.setRoute(this.props.routeIndex);
    }
    render() {
        return (
            <div>Album</div>
        )
    }
}