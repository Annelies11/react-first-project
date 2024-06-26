import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
        parentName: 'Biarin'
    }
    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName}, my name is ${childName}`)
  }

  render(){
    return <div>
        <ChildComponent greetHandler={this.greetParent}/>
    </div>
  }
}


export default ParentComponent