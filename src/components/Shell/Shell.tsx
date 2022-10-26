import React from "react";
import { Console } from "../Console";
import { connect } from "react-redux";
import { Titlebar } from "../Titlebar";

class Shell extends React.Component {
    scrollerRef: React.RefObject<unknown>;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Titlebar />
                <Console />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    const { activeSession } = state;

    return {
        activeSession
    }
}

export default connect(mapStateToProps)(Shell);