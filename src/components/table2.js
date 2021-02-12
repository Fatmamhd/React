import React from 'react';
import Header from './Header';
import Banniere from'./Banniere';
import Menu from './Menu';
import Contenu from './Contenu';
import Footer from './Footer';


export default class Table2 extends React.Component {
    
    render(){
        return(<table border="1">
            <thead></thead>
            <tbody>
                <tr><td><Header/></td></tr>
                <tr><td><Banniere/></td></tr>
                <tr>
                    <td><Menu/></td>
                    <td><Contenu/></td>
                    </tr>
                    <tr><td><Footer/></td></tr>
            </tbody>
            <tfoot></tfoot>
        </table>)
    };
    
}