import React from "react"
import AndroidProject from "../../../UI/androidProjectUI/AndroidProject"
function AndroidProjects(){
    return(
        <div className="portfolio-showcase-container">
            <div className="portfolio-showcase-text">
                <div className="showcase-title">
                    <h3>android projects</h3>
                </div>
            </div>

            <div className="android-showcase-container">
                <AndroidProject/>
                <AndroidProject/>
                <AndroidProject/>
                <AndroidProject/>
                <AndroidProject/>

            </div>
        </div>
    )
}
export default AndroidProjects;