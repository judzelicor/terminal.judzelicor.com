import React from "react";
import { YesodSystem } from "../../YesodSystem";

class CommandPrompt extends React.Component<any, any> {
    inputRef: any;

    constructor(props: any) {
        super(props);

        this.state = {
            inputText: ""
        }

        this.inputRef = React.createRef();
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleInput(event: any) {
        let input;
        let command;

        input = event.target.value.trim();

        if (event.key === "Enter") {
            YesodSystem.queueCommand(input);
            this.setState({ inputText: "" });
        }
    }

    handleKeyPress(event: any) {
        this.setState({ inputText: event.target.value });

    }

    render() {
        return (
            <React.Fragment>
                <input
                    className={ "commandPromptInput__AjX7" }
                    onKeyDown={ this.handleInput }
                    onChange={ this.handleKeyPress }
                    ref={ this.inputRef }
                    type={ "text" }
                    value={ this.state.inputText }
                />
            </React.Fragment>
        )
    }
}

export default CommandPrompt;