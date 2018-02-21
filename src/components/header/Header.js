import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser, logout } from '../../actions/userAction'

class Header extends Component {
      

    render(){
        return(
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">MyDiary</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              
              { this.props.user !== null ? (<Link className="nav-link" to="/logout" onClick={this.props.logout.bind(this)} >Logout <span className="sr-only">(current)</span></Link>) :(<Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>)}
              
            </li>
          </ul>
        </div>
      </nav>
        )
    }
 
    
}
function mapStateToProps(state){
    return {
        user : state.user
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUser,
        logout
    },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);

