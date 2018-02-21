import React, {Component} from 'react';


export default class NoteCard extends Component{
    render(){
        return(
            <div className="jumbotron">
                <div>{this.props.children}</div>
            </div>
        )
    }

}