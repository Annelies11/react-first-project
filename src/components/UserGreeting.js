import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {

    return this.state.isLoggedIn && <div>Yakinkan Aku Milikmu</div>
    // return this.state.isLoggedIn ? (<div>You Go Down Just Like Holy Mary</div>) : (<div>Mary On A Mary On A Cross</div>)
    
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Mary On A Cross</div>
    //     //message = "Mary On A Cross"
    // } else {
    //     message = <div>Nothing Wrong with That</div>
    // }
    // return <div>{message}</div>
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>Selamat Datang Ahlul Quran</div>
    //     )
    // } else {
    //     return(
    //         <div>Beranjak Baik</div>
    //     )
    // }
  }
}

export default UserGreeting