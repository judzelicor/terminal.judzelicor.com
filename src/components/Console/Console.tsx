import React from "react";
import CommnadLine from "./CommandLine";
import { YesodSystem } from "../../YesodSystem";
import { connect } from "react-redux";

class Console extends React.PureComponent<any, any> {
    scrollerRef: any;

    constructor(props: any) {
        super(props);

        this.scrollerRef = React.createRef();
    }

    componentDidMount(): void {
        const { queueCommand } = this.props;

        queueCommand("banner");
    }

    componentDidUpdate(): void {
        this.scrollerRef.current.scrollTop = this.scrollerRef.current.scrollHeight;
    }

    render() {
        const { activeSession } = this.props;
        
        return (
            <React.Fragment>
                <div className={"shell__f2Jp"} ref={this.scrollerRef}>
                    <div className={"scroller__AjX7"}>
                        {
                            activeSession.commandHistory.map((command: any, index: number) => {
                                return (
                                    <div key={ index }>
                                        {YesodSystem.runCommand(command)}
                                    </div>
                                )
                            })
                        }
                        <CommnadLine />
                    </div>
                </div>
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

function mapDispatchToProps(dispatch: any) {
    return {
        queueCommand: (command: any) => dispatch({ type: "QUEUE_COMMAND", payload: command })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Console);