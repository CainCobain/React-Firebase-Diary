import { auth, googleProvider, facebookProvider} from '../firebase';

export function getUser(){
    return dispatch => {

        dispatch({
            type : 'USER_STATUS',
            payload : true
        })
        auth.onAuthStateChanged(user => {
            dispatch({
                type : 'GET_USER',
                payload : user
            })

            dispatch({
                type : 'USER_STATUS',
                payload : false
            })
        })
    }
}

export function googleLogin(){
    return dispatch => auth.signInWithPopup(googleProvider);
}

export function facebookLogin(){
    return dispatch => auth.signInWithPopup(facebookProvider);
}

export function emailLogin(email, password){
    return dispatch => auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        //var errorCode = error.code;
        //var errorMessage = error.message;
        console.log('creat user error !!!');
      });
}

export function logout(){
    return dispatch => auth.signOut();
}