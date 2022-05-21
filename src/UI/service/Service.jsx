import React from 'react'
import {Link} from 'react-router-dom'
import './service.css'
function Service({ser}){
    return(
        <div className="service">
            
            <div className="service_icon">
                <img src={ser.logo} alt="logo" />
            </div>

            <div className="service_text">
                <h1>{ser.title}</h1>
                <p>
                    {ser.desc}
                </p>
            </div>

            <div className="service_query">
                <Link to="/contact"><button className="service_query_button">get query</button></Link>
            </div>
        </div>
    )
}

export default Service;