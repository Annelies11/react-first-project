import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Sugeng Rawuh</h1>
    //     </div>
    // )
    return React.createElement('div', {id : 'hello', className : 'sayHello'}, React.createElement('h1', null, 'Ku ikhlas tuk bertahan'))
}

export default Hello