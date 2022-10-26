import React from "react";
import { connect } from "react-redux";
import "./Topbar.css";

class Topbar extends React.Component {
    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(type: string) {
        const { queueCommand } = this.props;

        queueCommand(type);
    }

    render() {
        return (
            <>
                <section id={"topbar__AjX7"}>
                    <header className={"topbar__AjX7"}>
                        <ul className={"topbarButtonsList__LV5k"}>
                            <li>
                                <button 
                                    className={"topbarButton__LV5k"}
                                    onClick={ () => this.handleButtonClick("clear") }
                                >
                                    [ Home ]
                                </button>
                            </li>
                            <li>
                                <button 
                                    className={"topbarButton__LV5k"}
                                    onClick={ () => this.handleButtonClick("projects") }
                                >
                                    [ Projects ]
                                </button>
                            </li>
                            <li>
                                <button 
                                    className={"topbarButton__LV5k"}
                                    onClick={ () => this.handleButtonClick("experience") }
                                >
                                    [ Experience ]
                                </button>
                            </li>
                            <li>
                                <button 
                                    className={"topbarButton__LV5k"}
                                    onClick={ () => this.handleButtonClick("download resume") }
                                >
                                    [ Resume ]
                                </button>
                            </li>
                        </ul>
                    </header>
                </section>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch: any) {
    return {
        queueCommand: (command: string) => dispatch({ type: "QUEUE_COMMAND", payload: command })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);