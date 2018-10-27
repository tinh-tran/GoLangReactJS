const initState = {
    isAuth: false,
    userid: '',
    type: '',
    displayname: '',
    belong: '',
    userphoto: ''
}

const INITIAL_USER = 'INITIAL_USER';
const LOGIN_FAILD = 'LOGIN_FAILD';
const RESTART_USER = 'RESTART_USER';
const LOAD_DISPLAYNAME = 'LOAD_DISPLAYNAME';

const user = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_FAILD:
            return { state }
        case RESTART_USER:
            return { ...state, userphoto: action.userphoto, isAuth: true };
        case INITIAL_USER:
            return { ...action.info, isAuth: true };
        case LOAD_DISPLAYNAME:
            return { ...state, displayname: action.displayname }
        default:
            return state;
    }
}

export default user;
