import React from "react";

// function Greet(){
//     return <h1>Hello Aris</h1>
// }

const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>Assalamualaikum {props.name}. You are {props.heroName}</h1>
            {props.children}  
        </div>
    ) 
}
export default Greet