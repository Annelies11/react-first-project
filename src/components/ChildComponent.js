import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler("Semua tentang hati")}>Greet Button</button>
    </div>
  )
}

export default ChildComponent