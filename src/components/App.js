import React, { Component } from 'react';
import _ from 'lodash';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNotes, saveNotes, deleteNote } from '../actions/notesAction';
import NoteCard from './NoteCard';
import { getUser } from '../actions/userAction';
import { Link } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    // state 
    this.state = {
      title: '',
      post: ''
    }
    // binding methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount(){
    this.props.getNotes();
  }
  
  handleChange(e) {

    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      post: this.state.post,
      uid: this.props.user.uid
    }
    this.props.saveNotes(post);
    this.setState({
      title: '',
      post: ''
    })
  }

  renderPosts() {
    return _.map(this.props.notes, (note, key) => {
      return (
        <NoteCard key={key}>
          <Link to={`/${key}`}>
            <h2>{note.title}</h2>
          </Link>
          <p>{note.post}</p>
          <h6>Auth: {this.props.user.uid}</h6>
          {note.uid === this.props.user.uid && (
            <div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.props.deleteNote(key)}
              >Delete Note</button>
              <Link
                className="btn btn-info btn-sm float-right"
                to={`/${key}/edit`}
              >Update Note</Link>
            </div>
          )}

        </NoteCard>
      )
    });
  }

  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-sm-2 text-center">
            <img 
              src={this.props.user.photoURL}
              height="100px"
              className="img img-responsive rounded-circle"
              alt="user-img"
            />
            <h4 className="username">Welcome back, {this.props.user.displayName}</h4>
          </div>
          <div className="col-sm-10">
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
                className="btn btn-primary"
                style={{marginBottom:'2%'}}
                >Add post</button>
            </form>
            
            {this.renderPosts()}
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes,
    user: state.user
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getNotes,
    saveNotes,
    deleteNote,
    getUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
