import {
    PS1
} from "../../components";
import "./Fetchsum.css";

function Fetchsum() {
    return (
        <>
            <div className={ "fetchsum__AjX7" }>
                <div className={"bannerCommandLine__AjX7"}>
                    <PS1 />
                    <input
                        className={"bannerInput__AjX7"}
                        disabled={true}
                        value={`fetchsum`}
                    />
                </div>
                <div className={ "fetchsumColumnsWrapper__AjX7" }>
                    <pre style={{ fontFamily: "ModernDOS" }}>
                        {String.raw`                    'c.       
                 ,xNMM.       
               .OMMMMo        
               OMMM0,         
     .;loddo:' loolloddol;.   
   cKMMMMMMMMMMNWMMMMMMMMMM0: 
 .KMMMMMMMMMMMMMMMMMMMMMMMWd. 
 XMMMMMMMMMMMMMMMMMMMMMMMX.   
;MMMMMMMMMMMMMMMMMMMMMMMM:    
:MMMMMMMMMMMMMMMMMMMMMMMM:    
.MMMMMMMMMMMMMMMMMMMMMMMMX.   
 kMMMMMMMMMMMMMMMMMMMMMMMMWd. 
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.
    kMMMMMMMMMMMMMMMMMMMMMMd  
     ;KMMMMMMMWXXWMMMMMMMk.   
       .cooc,.    .,coo:.`}
                    </pre>
                    <table>
                        <tbody>
                            <tr>
                                <td className={ "fetchsumCommandsTableHeaderCol__AjX7" }>OS:</td>
                                <td>YesodOS v1.0 LTS x64ganymede</td>
                            </tr>
                            <tr>
                                <td className={ "fetchsumCommandsTableHeaderCol__AjX7" }>Host:</td>
                                <td>https://terminal.judzelicor.com</td>
                            </tr>
                            <tr>
                                <td className={ "fetchsumCommandsTableHeaderCol__AjX7" }>Uptime:</td>
                                <td>1 day</td>
                            </tr>
                            <tr>
                                <td className={ "fetchsumCommandsTableHeaderCol__AjX7" }>Dependency count:</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td className={ "fetchsumCommandsTableHeaderCol__AjX7" }>Terminal Font:</td>
                                <td>Modern DOS</td>
                            </tr>
                            <tr>
                                <td className={ "fetchsumCommandsTableHeaderCol__AjX7" }>Chip:</td>
                                <td>Apple M1</td>
                            </tr>
                            <tr>
                                <td className={ "fetchsumCommandsTableHeaderCol__AjX7" }>Memory:</td>
                                <td>16 GB</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Fetchsum;