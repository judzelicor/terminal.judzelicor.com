import { 
    commandsMap,
    commandsAction
} from "./Commands";
import {
    Banner,
    Help,
    Newline,
    Projects,
    Error,
    Experience
} from "../displays";
import { store } from "../store/store";
import { Fetchsum } from "../displays/Fetchsum";

class YesodSystem {
    commandsMap: { 
        commandTag1: { 
            id: string; 
            command: string; 
            type: string; 
            argsRequired: boolean; 
            messages: [object]; 
        }; 
    };
    commandsAction: { 
        commandTag1: () => void; 
    };

    constructor() {
        this.commandsMap = commandsMap;
        this.commandsAction = commandsAction;
    }

    parseInput(input) {
        let command;
        let commandArguments;
        let inputArray;

        inputArray = input.split(" ");

        command = inputArray[0];
        commandArguments = [inputArray.slice(1).join(" ")];
    }

    runCommand(userInput: string) {
        let commandID;
        let commandDetails;
        let commandArguments;
        let command;
        let userInputArray;
        
        userInputArray = [...userInput.split(" ")];
        command = userInputArray[0];
        commandDetails = this.retrieveCommandID(command);
        commandArguments = userInputArray.slice(1);

        if (!userInput) {
            return (
                <Newline />
            )
        }

        if (commandDetails) {
            commandID = commandDetails.id;

            if (commandDetails.type === "process") {
                this.commandsAction[commandID](commandArguments);

            } else if (commandDetails.type === "display") {
                switch(commandDetails.id) {
                    case "commandTag2":
                        return <Banner />
                    
                    case "commandTag3" :
                        return <Help option={ commandArguments } />

                    case "commandTag4":
                        return <Projects />

                    case "commandTag5":
                        return <Fetchsum />
                    
                    case "commandTag6":
                        return <Experience />
                }
            }
        } else {
            return <Error userInput={ userInput } />
        }
    }

    retrieveCommandID(command: any) {
        let commandID;
        let index;
        let commandIDIsFound;

        commandIDIsFound = false
        index = 0;

        while (!commandIDIsFound && index < this.commandsMap.length) {
            if (this.commandsMap[index].command === command) {
                commandID = this.commandsMap[index];

                commandIDIsFound = true;
            }

            index += 1;
        }

        return commandID;
    }

    queueCommand(command: any) {
        store.dispatch({ type: "QUEUE_COMMAND", payload: command });
    }
}

export default new YesodSystem();