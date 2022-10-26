import React from "react";
import "./Console.css";

class PS1 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={"ps1__AjX7"}>
                    <div className={ "ps1Icons__AjX7" }>
                        <div className={"appleIcon__AjX7"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.003 512.003">
                                <path d="M351.98 0c-27.296 1.888-59.2 19.36-77.792 42.112-16.96 20.64-30.912 51.296-25.472 81.088 29.824.928 60.64-16.96 78.496-40.096 16.704-21.536 29.344-52 24.768-83.104z" />
                                <path d="M459.852 171.776c-26.208-32.864-63.04-51.936-97.824-51.936-45.92 0-65.344 21.984-97.248 21.984-32.896 0-57.888-21.92-97.6-21.92-39.008 0-80.544 23.84-106.88 64.608-37.024 57.408-30.688 165.344 29.312 257.28 21.472 32.896 50.144 69.888 87.648 70.208 33.376.32 42.784-21.408 88-21.632 45.216-.256 53.792 21.92 87.104 21.568 37.536-.288 67.776-41.28 89.248-74.176 15.392-23.584 21.12-35.456 33.056-62.08-86.816-33.056-100.736-156.512-14.816-203.904z" />
                            </svg>
                        </div>
                        <div className="homeIcon__AjX7">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.298 460.297">
                                <path d="M230.149 120.939 65.986 256.274c0 .191-.048.472-.144.855-.094.38-.144.656-.144.852v137.041c0 4.948 1.809 9.236 5.426 12.847 3.616 3.613 7.898 5.431 12.847 5.431h109.63V303.664h73.097v109.64h109.629c4.948 0 9.236-1.814 12.847-5.435 3.617-3.607 5.432-7.898 5.432-12.847V257.981c0-.76-.104-1.334-.288-1.707L230.149 120.939z" />
                                <path d="M457.122 225.438 394.6 173.476V56.989c0-2.663-.856-4.853-2.574-6.567-1.704-1.712-3.894-2.568-6.563-2.568h-54.816c-2.666 0-4.855.856-6.57 2.568-1.711 1.714-2.566 3.905-2.566 6.567v55.673l-69.662-58.245c-6.084-4.949-13.318-7.423-21.694-7.423-8.375 0-15.608 2.474-21.698 7.423L3.172 225.438c-1.903 1.52-2.946 3.566-3.14 6.136-.193 2.568.472 4.811 1.997 6.713l17.701 21.128c1.525 1.712 3.521 2.759 5.996 3.142 2.285.192 4.57-.476 6.855-1.998L230.149 95.817l197.57 164.741c1.526 1.328 3.521 1.991 5.996 1.991h.858c2.471-.376 4.463-1.43 5.996-3.138l17.703-21.125c1.522-1.906 2.189-4.145 1.991-6.716-.195-2.563-1.242-4.609-3.141-6.132z" />
                            </svg>
                        </div>
                    </div>
                    <div className={"ps1Content__AjX7"}>
                        <p className={"ps1Text__AjX7"}>~ guest@judzelicor.com: $ </p>
                        <div className={ "ps1ContentEdge__AjX7" }>
                            <svg id="bg" height="100%" width="100%" viewBox="0 0 150 100" preserveAspectRatio="none">
                                <path d="M0,0 h110 l40,50 l-40,50 h-110z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PS1;