

export  default function ( state = {}, action) {

    switch (action.type){
        case 'NOTE_STATUS':
            return { ...state, notes : action.payload };
        case 'USER_STATUS':
            return { ...state, user : action.payload};
        default:
            return state;

    }
}