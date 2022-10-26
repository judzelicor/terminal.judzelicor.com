const INITIAL_STATE = {
    commandHistory: [],
    id: "leyline1",
    sessionOrder: 1,
    status: "focused"
}

export default function commandHistoryReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "QUEUE_COMMAND":
            return {
                ...state,
                commandHistory: [...state.commandHistory, action.payload]
            }

        case "CLEAR_COMMAND_HISTORY":
            return {
                ...state,
                commandHistory: []
            }
        
        default:
            return state
    }
}