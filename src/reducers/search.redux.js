const initState = {
    item: '',
    answer:''
}

const SEARCH_ITEM = 'SEARCH_ITEM';

const search = (state = initState, action) => {
    switch (action.type) {
        case SEARCH_ITEM:
            return { item:action.item , answer:action.answer}
        default:
            return state
    }
}

export default search;
