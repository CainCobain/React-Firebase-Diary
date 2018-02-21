import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import Comment from './Comment';
import _ from 'lodash';
import CommentComp from './CommentComp';

class NoteDetail extends Component {

    renderComments(){
        const { note } = this.props;
        return _.map(note.comments, (comment, key) => {
            return (
                <CommentComp key={key} id={key}>
                    {comment.commentBody}
                </CommentComp>
            );
        });
    }

=======

class NoteDetail extends Component {

>>>>>>> 3b78c9faecad407ce49365166451c0d8ce230407
    render() {
  
        const {note} = this.props;
        if(note !== undefined){
<<<<<<< HEAD
        return(    
=======
        return(
                    
>>>>>>> 3b78c9faecad407ce49365166451c0d8ce230407
                <div className="container">
                        <div className="row">
                                <div className="col-sm-6 col-sm-offset-3">
                                    <h1>{note.title}</h1>
                                    <h3>{note.post}</h3>
<<<<<<< HEAD
                                    <Comment id={this.props.match.params.id} />
                                    {this.renderComments()}

                                </div>
                        </div>
                    </div>  
=======
                                </div>
                        </div>
                    </div>
                
>>>>>>> 3b78c9faecad407ce49365166451c0d8ce230407
         )
        }else{
            return <div></div>
        }
            
        
        
    }
}

function mapStateToProps(state, ownProps){
<<<<<<< HEAD
=======
    console.log('match :',state);
>>>>>>> 3b78c9faecad407ce49365166451c0d8ce230407
    return {
        note : state.notes[ownProps.match.params.id],
        uid : state.user.uid
    };
}

export default connect(mapStateToProps)(NoteDetail);