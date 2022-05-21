import React from "react"
import Project from "../../../UI/project/Project";
import './cat.css'

function WebProjects(){
    return(
        <div className="portfolio-showcase-container">
            <div className="portfolio-showcase-text">
                <div className="showcase-title">
                    <h3>websites projects</h3>
                </div>
            </div>

            <div className="web-showcase-container">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>

            </div>
        </div>
    )
}
export default WebProjects;