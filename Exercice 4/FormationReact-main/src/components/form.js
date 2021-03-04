import React from 'react';

export default class Form extends React.Component {
    constructor (props) {
        super (props);
        this.state={
            first:'',
            second:'',
            result:''
        };
    }
    render(){
        return(
            <div>
                
            <form>
                <input type="text" name="first" value={this.state.first} onChange={(event) =>this.setState({first: event.target.value})}>

                </input>
                <input type="text" name="second" value={this.state.second} onChange={(event) =>this.setState({second: event.target.value})}></input>
                <input type="submit" onClick={(event) => {event.defaultPrevented(); }}></input>
                <p>Hi my name is {this.state.first}
                and my family name is {this.state.second} </p>
            </form>
            </div>
        )
    }
}