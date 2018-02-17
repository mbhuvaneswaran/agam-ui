import React, {Component} from 'react';
import {default as cx} from 'classnames' ;
import styles from './style.scss';
import { Link } from 'react-router-dom'

export default class HeaderComponent extends Component {
    render() {
      let s = this.props.globalStyles;
       return (
        <div className="container-fluid">
          <header className="row">
              <div className='header-logo col-md-2'>
              Agam
              </div>
              <nav className="col-md-10">
                <ul>
                  {
                    this.props.config.headers.map((header,index) => {
                      return (
                        <li key={index} class={this.props.selectedIndex===index ? 'active' : ''}> 
                          <Link to={header.url}>{header.title}</Link>
                        </li>
                      )
                    })
                  }
                  </ul>
                </nav>
            </header>
        </div>
        )
    }
}