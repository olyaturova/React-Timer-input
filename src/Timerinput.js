import { Component } from "react";

export default class Timerinput extends Component  {
    render() {
    return (<div>
    <div style={{marginLeft:100}}>
<h3>Input your desired time</h3>
<input type="number" minutes={this.props.minutes} onChange={this.props.handleChange} required />
</div>

    </div>
    );
    }
    }

