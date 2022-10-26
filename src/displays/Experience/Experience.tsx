import { PS1 } from "../../components";
import "./Experience.css";

function Experience() {
    return (
        <>
            <div className={ "experienceDisplay__AjX7" }>
                <div className={ "experienceDisplayCommandLine__AjX7" }>
                    <PS1 />
                    <input 
                        className={ "commandLineInput" }
                        value={ "experience" }
                    />
                </div>
                <div className={ "experienceDisplayContent__AjX7" }>
                    <h3 className={ "experienceDisplayContentTitle__AjX7" }>Where I've Worked</h3>
                    <p className={ "experienceDisplayContentPar__AjX7 banner" }>I'm currently looking for junior development roles!</p>
                    <p className={ "experienceDisplayContentPar__AjX7" }>Summary of my qualifications:</p>
                    <ul className={ "experienceQualificationsList__AjX7" }>
                        <li>
                            <p>I have some experience with designing user interfaces and experiences using Sketch and Figma. I've designed all my projects and implemented them from scratch. ✨</p>
                        </li>
                        <li>
                            <p>I've created dozens of projects using a yriad of technologies and programming languages. Check out my <a href={ "https://github.com/judzelicor" } target={ "_blank" } className={ "link" }>Github</a> profile and see for yourself!</p>
                        </li>
                        <li>
                            <p>I'm well-acquainted with back-end development (I ask for a brief moment of silence for all the VPSs whose lives were cut short). From SQL database technologies such as MySQL to common patterns such as MVC, I've had my hands dirty.</p>
                        </li>
                        <li>
                            <p>I'm taking Biochemistry at the University of Alberta which entails that I have a fresh pair of eyes and an unbiased mind that allows me to see programming problems in a unique perspective.</p>
                        </li>
                        <li>
                            <p>Learning is as natural as breathing to me. I don't shy away from any intellectual discourse be it in philosophy or programming. 🧠</p>
                        </li>
                        <li>
                            <p>I write novels as a hobby and I also dream of publishing my first book (In fact, I'm in the middle of writing one) so I consider it a luxury to write comments and documentations.</p>
                        </li>
                        <li>
                            <p>I'm paying for Leetcode premium. That should tell you something about my resolve 😤.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience;