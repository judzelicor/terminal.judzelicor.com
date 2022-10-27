import React from "react";
import { connect } from "react-redux";
import { YesodSystem } from "../../YesodSystem";

class CommandPrompt extends React.Component<any, any> {
    inputRef: any;

    constructor(props: any) {
        super(props);

        this.state = {
            inputText: "",
            commandHistoryIndex: 1
        }

        this.inputRef = React.createRef();
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleInput(event: any) {
        let commandHistory;
        let input;
        let command;
        let currentCommandIndex;
        let nextCommand;
        let nextCommandIndex;

        input = event.target.value.trim();
        const { activeSession } = this.props;
        commandHistory = activeSession.commandHistory;

        if (event.key === "Enter") {
            YesodSystem.queueCommand(input);
            this.setState({ inputText: "" , commandHistoryIndex: this.state.commandHistoryIndex + 1});
        } else if (event.key === "ArrowUp") {
            if (this.state.commandHistoryIndex <= commandHistory.length) {
                currentCommandIndex = this.state.commandHistoryIndex;
                nextCommandIndex = currentCommandIndex - 1
                nextCommand = commandHistory[nextCommandIndex]
                this.setState({ commandHistoryIndex: nextCommandIndex, inputText: nextCommand});
                console.log(currentCommandIndex)
            }
        } else if (event.key === "ArrowDown") {
            if (this.state.commandHistoryIndex >= 0) {
                currentCommandIndex = this.state.commandHistoryIndex;
                nextCommandIndex = currentCommandIndex + 1;
                nextCommand = commandHistory[nextCommandIndex]
                this.setState({ commandHistoryIndex: nextCommandIndex, inputText: nextCommand })
            }

        }
    }

    handleKeyPress(event: any) {
        this.setState({ inputText: event.target.value });

    }

    render() {
        console.log(this.state, this.props.activeSession.commandHistory)
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

function mapStateToProps(state: any) {
    const { activeSession } = state;

    return {
        activeSession
    }
}

export default connect(mapStateToProps)(CommandPrompt);