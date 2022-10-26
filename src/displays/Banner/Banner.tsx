import { useEffect } from "react";
import { PS1 } from "../../components";
import Typewriter from "typewriter-effect";
import "./Banner.css";

function Banner() {
    return (
        <>
            <div className={"banner__AjX7"}>
                <div className={"bannerCommandLine__AjX7"}>
                    <PS1 />
                    <input
                        className={"bannerInput__AjX7"}
                        disabled={true}
                        value={"banner"}
                    />
                </div>
                <div className={"bannerContent__AjX7"}>
                    <pre style={{ fontFamily: "monospace", color: "#07f49e", marginBottom: "7px" }}>
                        {String.raw`     ██╗██╗   ██╗██████╗ ███████╗    ██████╗ ██╗  ██╗██╗██╗     ██╗██████╗     ███████╗██╗     ██╗ ██████╗ ██████╗ ██████╗ 
     ██║██║   ██║██╔══██╗╚══███╔╝    ██╔══██╗██║  ██║██║██║     ██║██╔══██╗    ██╔════╝██║     ██║██╔════╝██╔═══██╗██╔══██╗
     ██║██║   ██║██║  ██║  ███╔╝     ██████╔╝███████║██║██║     ██║██████╔╝    █████╗  ██║     ██║██║     ██║   ██║██████╔╝
██   ██║██║   ██║██║  ██║ ███╔╝      ██╔═══╝ ██╔══██║██║██║     ██║██╔═══╝     ██╔══╝  ██║     ██║██║     ██║   ██║██╔══██╗
╚█████╔╝╚██████╔╝██████╔╝███████╗    ██║     ██║  ██║██║███████╗██║██║         ███████╗███████╗██║╚██████╗╚██████╔╝██║  ██║
 ╚════╝  ╚═════╝ ╚═════╝ ╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝╚═╝         ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝`}
                    </pre>
                    <p className={"bannerContentPar__AjX7"}>👋 Hello, my name is Judz. I'm a homo sapiens that mutated and acquired programming skills.</p>
                    <p className={"bannerContentPar__AjX7"}>Welcome to the command terminal of my portfolio v1.0 🎉</p>
                    <p className={"bannerContentPar__AjX7"}>This is an interactive webpage. Enter your commands below!</p>
                    <p className={"bannerContentPar__AjX7"}>Type "help" to see a list of premissible commands.</p>
                </div>
            </div>
        </>
    )
}

export default Banner;