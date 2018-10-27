const initState = {
    page:1,
    classdata:[]
}

const LOAD_CLASS = 'LOAD_CLASS';

const classlist = (state = initState, action) => {
    switch (action.type) {
        case LOAD_CLASS:
            return {page:action.page , classdata:action.classdata};
        default:
            return state
    }
}

export default classlist;
