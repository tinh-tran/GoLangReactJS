const initState = {
    userid:'',
    classid: '',
    classinfo:[],
    classchapter:[],
    classsection:[],
    isSelect:false
}

const LOAD_COURSE = 'LOAD_COURSE';
const LOAD_CHAPTER = 'LOAD_CHAPTER';
const IS_SELECT = 'IS_SELECT';
const LOAD_SECTION = 'LOAD_SECTION';
const GET_ALLITEM = 'GET_ALLITEM';
const SELECT_COURSE = 'SELECT_COURSE';

const course = (state = initState, action) => {
    switch (action.type) {
        case SELECT_COURSE:
            return {...state , isSelect:action.isSelect}
        case GET_ALLITEM:
            return {...state , allitem:action.allitem}
        case LOAD_SECTION:
            return {...state , classsection:action.classsection}
        case LOAD_COURSE :
            return {...state , classinfo:action.classinfo[0]};
        case LOAD_CHAPTER:
            return {...state , classchapter:action.classchapter}
        case IS_SELECT:
            return { ...state , userid:action.userid , classid:action.classid , isSelect:action.isSelect }
        default:
            return state
    }
}

export default course;
