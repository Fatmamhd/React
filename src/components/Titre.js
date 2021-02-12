import React from 'react';

export default class Titre extends React.Component{
    render() {
        return(
            <div className="Titre">
                <h2>Titre</h2>
                <Titre/>
            </div>
        );
    }

}