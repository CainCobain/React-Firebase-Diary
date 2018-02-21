import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { googleLogin, facebookLogin} from '../actions/userAction'; 




class Login extends Component {
    
    constructor(props){
        super(props);
        this.googleAuth = this.googleAuth.bind(this);
        this.facebookAuth = this.facebookAuth.bind(this);   
    }

    googleAuth(){
        return this.props.googleLogin();
    }

    facebookAuth(){
        return this.props.facebookLogin();
    }

    componentWillMount() {
        if(this.props.user !== null){
            this.props.history.push('/');
        }
    }
    componentWillReceiveProps(nextProps) {
        if( nextProps.user !== null){
            nextProps.history.push('/');
        }
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm-12 jumbotron">
                        <h1>
                            Login with Google or Facebook
                        </h1>
                     </div>

                     <div className="col-sm-6"> 
                        <button className="btn btn-danger btn-lg" onClick={this.googleAuth}>Google</button>
                     </div>
                     <div className="col-sm-6"> 
                        <button className="btn btn-primary btn-lg" onClick={this.facebookAuth}>Facebook</button>
                     </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        googleLogin,
        facebookLogin
    },dispatch);
}
function mapStateToProps(state){
    return ({
        user : state.user
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);