import React from "react";
import "./Titlebar.css";

class Titlebar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id={ "titlebar" }>
                    <p>-zsh</p>
                </section>
            </React.Fragment>
        )
    }
}

export default Titlebar;