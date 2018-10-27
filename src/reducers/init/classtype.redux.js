const initState = [{
    icon:'',
    typeid:'',
    typename: ''
}]

const LOAD_CLASSTYPE = 'LOAD_CLASSTYPE';

const classtype = (state = initState, action) => {
    switch (action.type) {
        case LOAD_CLASSTYPE:
            return action.classtype
        default:
            return state
    }
}

export default classtype;
