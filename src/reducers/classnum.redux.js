const initState = {
    classtype:'全部',
    num: 8,
}

const LOAD_CLASSNUM = "LOAD_CLASSNUM";



const classnum = (state = initState, action) => {
    switch (action.type) {
        case LOAD_CLASSNUM:
            return { classtype:action.classtype , num:action.classnum };
        default:
            return state
    }
}

export default classnum
