import {
    PS1
} from "../../components";
import "./Help.css";

function Help({ option }: any) {
    if (option.length === 0) {
        return (
            <>
                <div className={"help__AjX7"}>
                    <div className={"bannerCommandLine__AjX7"}>
                        <PS1 />
                        <input
                            className={"bannerInput__AjX7"}
                            disabled={true}
                            value={"help"}
                        />
                    </div>
                    <div>
                        <h3 className={"helpCommandsTitle__AjX7"}>[ Welcome to the Yesod System's help utility! ]</h3>
                        <table className={"helpCommandsTable__AjX7"}>
                            <tbody>

                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>help [?arguments]</td>
                                    <td>List permissible commands and return more about a specific command</td>
                                </tr>
                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>fetchsum</td>
                                    <td>Display on terminal a summary of my website</td>
                                </tr>
                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>projects</td>
                                    <td>View a list of the projects I've worked on</td>
                                </tr>
                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>whoami</td>
                                    <td>Get more insight about the creator of this website</td>
                                </tr>
                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>experience</td>
                                    <td>Examine my professional history</td>
                                </tr>
                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>email</td>
                                    <td>Open your default email client and let's talk</td>
                                </tr>
                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>download [arguments]</td>
                                    <td>Download a specific file from my website</td>
                                </tr>
                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>open [arguments]</td>
                                    <td>Open a new tab to view a specific link</td>
                                </tr>
                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>banner</td>
                                    <td>Display the terminal header</td>
                                </tr>
                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>echo [arguments]</td>
                                    <td>Write formatted text and display on the terminal</td>
                                </tr>
                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>clear</td>
                                    <td>Refresh the terminal</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    } else if (option.length === 1 && option[0] === "download") {
        return (
            <>
                <div className={"downloadHelpCommand__AjX7"}>
                    <div className={"bannerCommandLine__AjX7"}>
                        <PS1 />
                        <input
                            className={"bannerInput__AjX7"}
                            disabled={true}
                            value={`help ${option[0]}`}
                        />
                    </div>
                    <div className={"downloadHelpContent__AjX7"}>
                        <p style={{ marginBottom: "14px" }}>Usage: download [argument]</p>
                        <table className={"downloadHelpCommandTable__AjX7"}>
                            <tbody>
                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>Arguments</td>
                                </tr>
                                <tr>
                                    <td className={"helpCommandsTableHeaderCol__AjX7"}>resume</td>
                                    <td>Download a virus-free PDF copy of my resume into your local device.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    } else if (option.length === 1 && option[0] === "open") {
        return (
            <>
                <div className={ "openHelpCommand__AjX7" }>
                    <div className={"bannerCommandLine__AjX7"}>
                        <PS1 />
                        <input
                            className={"bannerInput__AjX7"}
                            disabled={true}
                            value={`help ${option[0]}`}
                        />
                    </div>
                    <div className={ "openHelpCommandContent__AjX7" }>
                        <p style={{ marginBottom: "14px" }}>Usage: open [arguments]</p>
                        <table className={ "openHelpCommandTable__AjX7" }>
                            <tbody>
                                <tr>
                                    <td>Arguments</td>
                                </tr>
                                <tr>
                                    <td>github</td>
                                    <td>Open my Github profile on a new tab and learn more about what I work on</td>
                                </tr>
                                <tr>
                                    <td>twitter</td>
                                    <td>Open my Twitter profile on a new tab and know more about who am I as a person</td>
                                </tr>
                                <tr>
                                    <td>linkedin</td>
                                    <td>Open my LinkedIn profile on a new tab and connect with me for professional opportunities</td>
                                </tr>
                                <tr>
                                    <td>email</td>
                                    <td>Open your default client and tap me on the shoulder!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }

    else {
        return (
            <>
                <div className={"commandExecutionError__AjX7"}>
                    <div className={"bannerCommandLine__AjX7"}>
                        <PS1 />
                        <input
                            className={"bannerInput__AjX7"}
                            disabled={true}
                            value={`help ${option.join(" ")}`}
                        />
                    </div>
                    <div>
                        <p className={"bannerContentPar__AjX7"}>The aforementioned "help" command contain(s) invalid argument(s). Please enter "help" to--why do I keep repeating myself?</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Help;
