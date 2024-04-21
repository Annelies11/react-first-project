import React from "react";

// function Greet(){
//     return <h1>Hello Aris</h1>
// }

const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Assalamualaikum {name}. You are {heroName}</h1>  
        </div>
    ) 
}
export default Greet