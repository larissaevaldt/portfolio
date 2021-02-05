import React, { Component } from 'react';
import img from "../static/larissa1.png";

class Intro extends Component {
    render() {
        return (
            <section className="intro" id="home">
                 <h1 className="section__title section__title--intro">
                    Hi, I am <strong>Larissa Evaldt</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">Web Developer and UX Enthusiast </p>
                <img src={img} alt="Larissa Evaldt smiling" className="intro__img" />
            </section>
        )
    }
}

export default Intro;
