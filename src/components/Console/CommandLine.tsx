import React from "react";
import CommandPrompt from "./CommandPrompt";
import PS1 from "./PS1";
import "./Console.css";

class CommandLine extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={ "consoleCommandLine__AjX7" }>
                    <PS1 />
                    <CommandPrompt />
                </div>
            </React.Fragment>
        )
    }
}

export default CommandLine;