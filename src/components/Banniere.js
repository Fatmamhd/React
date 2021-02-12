import React from 'react';
import '../style/style.css';

export default class Banniere extends React.Component {
    render(){
        return(
            <div className="Banniere">
                <h2>Banniere</h2>
                <Banniere/>
            </div>
        );
    }
}