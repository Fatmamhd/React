import React from 'react';

export default class EventTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    render() {
        var jsx = ''
        if (this.props.event === "onblur") {

            jsx = <div>
                <h3>{this.props.event}</h3>
                <span>The onblur attribute fires the moment that the element loses focus.</span>
                <input type="text" name="onBlurInput" onBlur={() => alert("on blur fired")} />
            </div>
        }
        else if (this.props.event === "onfocus") {
            jsx = <div>
                <h3>{this.props.event}</h3>
                <span>The onfocus attribute fires the moment that the element gets focus.</span>
                <input type="text" name="onFocusInput" onFocus={() => alert('on focus is fired')} />
            </div>
        } else if (this.props.event === "oninput") {
            jsx = <div>
                <h3>{this.props.event}</h3>
                <span>The oninput attribute fires when an element gets user input.</span>
                <input type="text" name="onInputInput" onInput={(event) => this.setState({ value: event.target.value })} />
                <span>You wrote: {this.state.value}</span>
            </div>
        } else if (this.props.event === "oninvalid") {
            jsx = <div>
                <h3>{this.props.event}</h3>
                <span>The oninvalid event occurs when a submittable input element is invalid.</span>
                <form>
                    <input type="text" name="onInvalidInput" onInvalid={() => alert('This form is not valid')} required={true} />
                    <input type="submit" value="Submit this form" />
                </form>
            </div>
        } else if (this.props.event === "onsubmit") {
            jsx = <div>
                <h3>{this.props.events}</h3>
                <span> The onsubmit attribute fires when a form is submitted.</span>
                <form name="onSubmit" onSubmit={() => alert('This form was submitted')}>
                    <input type="text" />
                    <input type="submit" />
                </form>
            </div>
        } else if (this.props.event === "onselect") {
            jsx = <div>
                <h3> {this.props.events}</h3>
                <span> The onselect attribute fires after
                some text has been selected in an element.
                </span>
                <form >
                    <input type="text" name ="onselect" value ="hello" onSelect={() => alert('This text was selected')}/>
                              </form>

            </div>
        } else if (this.props.event === "onkeyup") {
jsx = <div>
    <h3> {this.props.events}</h3>
    <span> The onkeyup attribute fires when the user releases a key (on the keyboard)</span>
    <form>
        <input type="text" name = "onkeyup" onKeyUp= {() => alert ('The key is up')} />
    </form>
</div>
        } else if(this.props.event === "ondoubleclick"){
            jsx = <div>
            <h3> {this.props.events} </h3>
            <span> The ondblclick attribute fires on a mouse double-click on the element.</span>
            <form>
                <input type="text" name = "ondoubleclick" onDoubleClick = {() => alert ('It was double clicked')} />
            </form>
            </div>
        } else if (this.props.event ==="onmouseout") {
            jsx = <div>
                <h3> {this.props.events}</h3>
                <span> The onmouseout attribute fires when the mouse 
                    pointer moves out of an element.</span>
                    <form>
                        <input type="text" name = "onmouseout" onMouseOut  = { () => alert ('The mouse is out ')} />
                    </form>
            </div>
        } else if (this.props.event === "onmouseup") {
            jsx = <div>
                <h3> {this.props.events}</h3>
                <span> 
The onmouseup attribute fires when a mouse button is released over the element.</span>
<form>
    <input type="text" name = "onmouseup" onMouseUp = { () => alert ('The mouse is up ')} />
</form>
            </div>
        }
        return (
            <div>
                {jsx}
            </div>
        )
    }
}
