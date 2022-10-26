import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Shell } from "../Shell";
import "./Terminal.css";
class Terminal extends React.Component {
    render() {
        return (_jsx(React.Fragment, { children: _jsx("section", { className: "window__AjX7", children: _jsx("div", { className: "shell__AjX7", children: _jsx(Shell, {}) }) }) }));
    }
}
export default Terminal;
