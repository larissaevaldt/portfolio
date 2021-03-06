import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="Navbar">
                <h3 className="Navbar-logo">&lt; Larissa E. /&gt;</h3>
                <div className="Navbar-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'Nav-menu active' : 'Nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                <span className="number">0{index+1}.</span> {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Resume</Button>
            </nav>
        )
    }
}

export default Navbar;