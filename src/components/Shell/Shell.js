import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Console } from "../Console";
import { connect } from "react-redux";
import { Titlebar } from "../Titlebar";
class Shell extends React.Component {
    scrollerRef;
    constructor(props) {
        super(props);
    }
    render() {
        return (_jsxs(React.Fragment, { children: [_jsx(Titlebar, {}), _jsx(Console, {})] }));
    }
}
function mapStateToProps(state) {
    const { activeSession } = state;
    return {
        activeSession
    };
}
export default connect(mapStateToProps)(Shell);
