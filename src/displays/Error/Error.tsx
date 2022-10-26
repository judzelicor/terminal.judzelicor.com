import { PS1 } from "../../components";
import "./Error.css";

function Error({ userInput }) {
    return (
        <>
            <div className={ "error__AjX7" }>
                <div className={ "errorCommandLine__AjX7" }>
                    <PS1 />
                    <input
                        className={ "errorInput__AjX7" }
                        value={ userInput }
                    />
                </div>
                <div className={ "errorDisplayContent__AjX7" }>
                    <p className={ "bannerContentPar__AjX7" }>The Yesod System could not parse your invocation. <span className={ "errorContentCommand__AjX7" }>"{ userInput }"</span> is not a command.</p>
                    <p className={ "bannerContentPar__AjX7" }>Type "help" to see a list of permissible commands.</p>
                </div>
            </div>
        </>
    )
}

export default Error;