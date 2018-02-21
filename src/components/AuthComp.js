import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class AuthComp extends Component {
    
    componentDidUpdate(){
        const {userLoading, user} = this.props;
        
        if(userLoading === false && !user){
           
            this.props.history.push('/login');
        }
    }

    render(){
        const {children, userLoading, user} = this.props;
        return (userLoading === false && user )? <div>{children}</div>: null
    }
}

function mapStateToProps(state){
    return {
        userLoading : state.loading.user,
        user : state.user
    }
}

export default withRouter(connect(mapStateToProps)(AuthComp));
