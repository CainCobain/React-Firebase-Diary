import { database } from '../firebase';

export function getNotes(){
  return dispatch => {
      dispatch({
          type : 'NOTES_STATUS',
          payload : true
      })
    database.on('value', snapshot => {
        dispatch({
            type: 'GET_NOTES',
            payload: snapshot.val()
        })

        dispatch({
            type : 'NOTES_STATUS',
            payload : false
        })
    },()=> {
        dispatch({
            type :'NOTES_STATUS',
            payload : -1
        })
  });
  }
}

export function saveNotes(note){
    return dispatch => database.push(note);
}

export function deleteNote(id){
  return dispatch => database.child(id).remove();
<<<<<<< HEAD
}

//Comment notes 

export function saveComment(noteId, comment){
    return dispatch =>{
        database.child(noteId).child('comments').push(comment);
    } 
=======
>>>>>>> 3b78c9faecad407ce49365166451c0d8ce230407
}