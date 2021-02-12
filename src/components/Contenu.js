import React from 'react';
import Article from './Article';
import Notes from './Notes';


export default class Contenu extends React.Component{
    render(){
        return(
            <table>
            
                <tr><td><Article/>
                
                </td>
                <td><Notes/></td></tr>

            </table>
            );
    }
}