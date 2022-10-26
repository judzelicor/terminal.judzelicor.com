import React from "react";
import { Shell } from "../Shell";
import "./Terminal.css";

class Terminal extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className={ "window__AjX7" }>
                    <div className={ "shell__AjX7" }>
                        <Shell />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Terminal;