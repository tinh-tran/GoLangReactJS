const initState = [{
    classid:'',
    classphoto:'',
    selectstudent:'',
    classname:'',
    belong:'',
    teacher:'',
    type:''
}]

const LOAD_HOTCLASS = 'LOAD_HOTCLASS';

const hotclass = (state = initState, action) => {
    switch (action.type) {
        case LOAD_HOTCLASS:
            return action.hotclass;
        default:
            return state;
    }
}

export default hotclass;
