import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class MainComponent extends Component {
    setRoute(index){
        this.props.setRoute(index);
    }
    render() {
        let self = this;
        return (
            <div className="col-md-10">
                {/* <Route path={'/'} render={(routeProps) => {
                                    let Component = this.props.components['About the band'].default
                                    return <Component {...routeProps} routeIndex={0} setRoute={this.setRoute}/>
                                    
                                }}/> */}
                   {
                        this.props.config.headers.map((header,index) => {
                            return (
                                <Route path={header.url} render={(routeProps) => {
                                    let Component = this.props.components[header.title].default;
                                    return <Component {...routeProps} routeIndex={index} setRoute={self.setRoute.bind(self)}/>
                                    
                                }}/>
                            )
                        }        
                        )  
                        }
                   
                </div>
        )
    }
}