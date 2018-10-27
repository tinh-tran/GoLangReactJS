const initState = {
    myclass: []
}

const GET_MYCLASS = 'GET_MYCLASS';

const myclass = (state = initState, action) => {
    switch (action.type) {
        case GET_MYCLASS:
            return [...action.myclass]
        default:
            return state
    }
}

export default myclass;