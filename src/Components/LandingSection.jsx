import React from "react";



// const LandingSection = () => {
//     <div className="FullScreenSection"
//         // justifyContent="centre" alignItems="centre" isDarkBackGround backgroundColor="#18181b"
//     >
//         <div className="LandingSection" 
//             // spacing={16}
//         >
//             <div 
//                 className="Avatar"
//                 // spacing={4} 
//                 // alignItems="centre"
//             >
//                 <img 
//                     src="" 
//                     // size="2xl" 
//                     name=""
//                 />
//                 <h4 
//                     // size="md" 
//                     // noOfLine={1}
//                 >
//                     Hello, I am Mtutuzeli!
//                 </h4>
//             </div>
//             <div className="Text">
//                 <h1 
//                     // size="3xl" noOfLine={1}
//                 >
//                     A frontend Developer
//                 </h1>
//                 <h1 
//                     // size="3xl" noOfLine={1}
//                 >
//                     specialised in React
//                 </h1>
//             </div>
//         </div>
//     </div>

//     return(
//         <div 
//             // backgroundColor="" 
//             // color={isDarkBackGround ? "white" : "black"}
//         >
//             <div 
//                 // maxWidth="1280px" minHeight="100vh" {...boxProps}
//             >
//                 {/* {children} */}
//             </div>
//         </div>
//     )
// }
// function Logo(props) {
//     const profilePic = <img src={moon} />;
//     return profilePic;
// }

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
            <img className="avatar" src="./images/Avatar.jpg" height={200} />
            <h4 style={{paddingBottom: "50px"}}>
                Hello, I am Mtutuzeli!
            </h4>
            <h1>A frontend developer</h1>
            <h1>specialised in React</h1>
        </div>
        
    )
}
export default LandingSection;