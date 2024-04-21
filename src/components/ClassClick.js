import React, {Component} from "react";

class ClassClick extends Component {
    clickHandler() {
        console.log('Tapi kini ku tak salah')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me Bro</button>
            </div>
        )
    }
}

export default ClassClick