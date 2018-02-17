import React, {Component} from 'react';
import {default as cx} from 'classnames';
export default class SidebarComponent extends Component {
    render() {
        return (
            <div className="sidebar-component col-md-2 col-2">
                <div className="bar">
                    {
                        this.props.config.headers.map((header,index) => {
                            return (
                                <div className={cx('dot',{'active' : (this.props.selectedIndex === index)})} key={index}/>
                            )
                        })
                    }
                    </div>
                </div>
        )
    }
}