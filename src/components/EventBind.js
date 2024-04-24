import React, {Component} from "react";

class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
            message : 'Let you go'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message : "Istana Bintang"
    //     })
    // }
    clickHandler = () => {
        this.setState({
            message : 'Biarkan saja kucoba'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Stupid Heart</button> */}
                {/* <button onClick={() => this.clickHandler()}>Stupid Heart</button> */}
                <button onClick={this.clickHandler}>Stupid Heart</button>
            </div>
        )
    }
}

export default EventBind