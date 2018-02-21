import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteDetail extends Component {

    render() {
  
        const {note} = this.props;
        if(note !== undefined){
        return(
                    
                <div className="container">
                        <div className="row">
                                <div className="col-sm-6 col-sm-offset-3">
                                    <h1>{note.title}</h1>
                                    <h3>{note.post}</h3>
                                </div>
                        </div>
                    </div>
                
         )
        }else{
            return <div></div>
        }
            
        
        
    }
}

function mapStateToProps(state, ownProps){
    console.log('match :',state);
    return {
        note : state.notes[ownProps.match.params.id],
        uid : state.user.uid
    };
}

export default connect(mapStateToProps)(NoteDetail);