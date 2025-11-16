import React from "react";
import avatarImage from '../assets/images/Avatar.webp';

function LandingSection() {
    const landingStyle = {
        backgroundColor: "#18181b",
        alignItems: "centre",
        justifyContent: "centre",
        color: "white",
        alignContent: "centre",
        paddingTop: "50px",
        paddingBottom: "50px",
    };

    return(
        <div className="LandingSection" style ={landingStyle}>
            <img className="avatar" id='avatar' src={avatarImage} alt="Avatar" height={200}/>
            <h4 style={{paddingBottom: "50px"}}>
                Hello, I am Mtutuzeli!
            </h4>
            <h1>A frontend developer</h1>
            <h1>specialised in React</h1>
        </div>
    )
}
export default LandingSection;