import React from 'react';

export default class Note extends React.Component{
    render() {
        return(
            <div className="Note">
                <h2>Note</h2>
                <Note/>
            </div>
        );
    }

}