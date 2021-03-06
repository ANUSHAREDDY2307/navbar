import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import './App.css';
export default class App extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render() {
        const li = [
            {
                link: "/",
                text:"Home"
            },
            {
                link: "/about/",
                text:"About us"
            },
            {
                link: "/contact/",
                text:"Contact us"
            },
            {
                link: "/our courses/",
                text:"Our courses"
            },
            {
                link: "/Join our community/",
                text:"Join our community"
            },
            {
                link: "/Join our discussion forum/",
                text:"Join our discussion forum"
            }
 ];
        return (
            <>
            <div className="navBar">
                  <button onClick={this.Toggle}>
                      <FaAlignRight />
                  </button>
                  <ul className={this.state.toggle ? "links show-nav" : "links"}>
                      {
                          li.map((objLink, i) => {
                            return ( <li key={i}><a href={objLink.link}>{objLink.text}</a></li> )
                          })
                      }
                  </ul>
            </div>
        </>
        );
    }
}