import { store } from "../store/store";
import {
    Banner
} from "../displays";

const commandsMap = [
    {
        id: "commandTag1",
        command: "clear",
        type: "process",
        argsRequired: false,
        messages: []
    },
    {
        id: "commandTag2",
        command: "banner",
        type: "display",
        argsRequired: false,
        messages: []
    },
    {
        id: "commandTag3",
        command: "help",
        type: "display",
        argsrequired: false,
        messages: []
    },
    {
        id: "commandTag4",
        command: "projects",
        type: "display",
        argsrequired: false,
        messages: []
    },
    {
        id: "commandTag5",
        command: "fetchsum",
        type: "display",
        argsRequired: false,
        messages: []
    },
    {
        id: "commandTag6",
        command: "experience",
        type: "display",
        argsRequired: false,
        messages: []
    },
    {
        id: "commandTag7",
        command: "email",
        type: "process",
        argsRequired: false,
        messages: []
    },
    {
        id: "commandTag8",
        command: "download",
        type: "process",
        argsRequired: true,
        messages: []
    }
]

const commandsAction = {
    "commandTag1": () => {
        store.dispatch({ type: "CLEAR_COMMAND_HISTORY" })
    },
    "commandTag7": () => {
        window.location.href = "mailto:judzphilipelicor@outlook.com"
    },
    "commandTag8": (filename: any) => {
        if (filename.length === 1 && filename[0] === "resume") {
            const link = document.createElement("a");
            link.download = "jpelicor-resume.pdf";
            link.href = "https://terminal.judzelicor.com/resume/jpelicor-resume.pdf";
            link.dispatchEvent(new MouseEvent("click"));
        }
    }
}

export { 
    commandsMap,
    commandsAction 
}