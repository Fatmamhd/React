import React from 'react';
import EventTest from '../components/eventTest';

export default class Ex5 extends React.Component {

    constructor(props){
        super(props);
        this.state={
            event: ''
        }
    }

    render() {
      return( 
        <div>
            <h2>HTML Event Attributes</h2>
            <select name="events" onChange={(event) => this.setState({event: event.target.value})}>
                <option value="">Select an Event</option>
                <option value="onblur">Form Events - OnBlur</option>
                <option value="onfocus">Form events - OnFocus</option>
                <option value="oninput">Form Events - OnInput</option>
                <option value="oninvalid">Form events - OnInvalid</option>
                <option value="onsubmit">Form events - onSubmit</option>
                <option value="onselect">Form events - onSelect</option>
                <option value="onkeyup"> Form events - onKeyUp </option>
                <option value ="ondoubleclick"> Form events - onDoubleClick</option>
                <option value ="onmouseout"> Form events - onMouseOut</option>
                <option value ="onmouseup"> Form events - onMouseUp </option>
            </select>
            <EventTest event={this.state.event} />
        </div>
    
    )  
    }
}