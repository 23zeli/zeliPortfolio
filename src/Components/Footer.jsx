import React from "react";

function Footer() {

    return(
        <div className="Footer" style={{ backgroundColor: "#18181b", display: "flex", justifyContent: "center",}}>
            <p 
                style={{
                    paddingTop: "25px", 
                    paddingBottom: "25px",
                    color: "whitesmoke",
                }}
            >
                Copyright &copy;2025
            </p>
        </div>
        
    )
}

export default Footer