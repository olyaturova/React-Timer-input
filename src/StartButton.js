import { Component } from "react";

export default class StartButton extends Component {
    render() {
     return (<div>
     <div style={{ marginLeft: 130 }}>
 <button onClick={this.props.startCountDown}>Start</button>
 </div>
     </div>
     );
     }
    }