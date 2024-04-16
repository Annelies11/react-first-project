import React, {Component} from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            msg : 'Hey, Welcome to my Lab!'
        }
    }
    theMessage() {
        this.setState({
            msg : 'Thank you for subscribing'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.theMessage()}>Subscribe</button>
            </div>
    )
    }
}

export default Message