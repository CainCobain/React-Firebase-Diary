import  React, { Component } from 'react';
import  { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getNotes } from '../actions/notesAction';
import { getUser } from '../actions/userAction';

class Loading extends Component{

    componentDidMount(){
        const { userLoadgin, notesLoading } = this.props;
        // if we havent tried to load the user, load user
        if( userLoadgin === undefined ){
            this.props.getUser();
        }
        // if we havent tried to load the notes, load notes
        if( notesLoading === undefined ){
            this.props.getNotes();
        }
    }
    componentWillReceiveProps(nextProps){
        // wait user to auth and try load the notes
        if( nextProps.getNotes === -1 && nextProps.getUser !== null){
            this.props.getNotes();
        }
    }
    render(){
        const { notesLoading, userLoadgin, children} = this.props;
        if( (!notesLoading && !userLoadgin) || this.props.user === null ){
           return <div>{children}</div>;
        }else{
           return (<div>
                        <h1>Loading ...</h1>
                    </div>);
        }
       
    }
}
function mapStateToProps(state){
    return ({
        user : state.user,
        userLoadgin : state.loading.user,
        notesLoading : state.loading.notes
        
    })
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getNotes,
        getUser
    },dispatch);
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Loading));