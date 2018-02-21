import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNotes } from '../actions/notesAction';

class NoteEdit extends Component {

    constructor(props) {
        super(props);
        // state 
            this.state = {
            title: this.props.note.title,
            post: this.props.note.post
        }
        
        // binding methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const id = this.props.match.params.id;
        const post = {
            title: this.state.title,
            post: this.state.post
        }
        this.props.updateNotes(id, post);
       this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
      <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <form onSubmit={this.handleSubmit} >
                            <div className="form-group">
                                <label >Post Title : </label>
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    placeholder="Enter title" />
                            </div>
                            <div className="form-group">
                                <label >Your Post :</label>
                                <textarea
                                    onChange={this.handleChange}
                                    value={this.state.post}
                                    cols="30"
                                    className="form-control"
                                    id="post"
                                    name="post"
                                    placeholder="Post Content..." />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-success">Edit post</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        note: state.notes[ownProps.match.params.id],
        uid: state.user.uid
    };
}

export default connect(mapStateToProps,{updateNotes})(NoteEdit);