import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { googleLogin, facebookLogin, emailLogin} from '../actions/userAction'; 




class Login extends Component {
    
    constructor(props){
        super(props);
        this.googleAuth = this.googleAuth.bind(this);
        this.facebookAuth = this.facebookAuth.bind(this);   
        this.emailAuth = this.emailAuth.bind(this);
    }

    googleAuth(){
        return this.props.googleLogin();
    }

    facebookAuth(){
        return this.props.facebookLogin();
    }

    emailAuth(e){
        e.preventDefault();
         return this.props.emailLogin(this.refs.email.value,this.refs.password.value);
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
                <form onSubmit={this.emailAuth}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" ref="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" ref="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        googleLogin,
        facebookLogin,
        emailLogin
    },dispatch);
}
function mapStateToProps(state){
    return ({
        user : state.user
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);