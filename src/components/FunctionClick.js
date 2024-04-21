import React from "react";

function FunctionClick() {
    let i = 0
    function clickHandler(){
        
        console.log('Button CLicked in ',i)
        i++
    }
    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default FunctionClick