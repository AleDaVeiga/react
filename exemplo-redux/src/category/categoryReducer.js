const INITIAL_STATE = {
    categories: [],
    category: '',
    cats: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CATEGORY_SELECTED':
            return { ...state, category: action.payload }
        case 'CATEGORY_LIST':
            return { ...state, categories: action.payload }
        case 'CAT_LIST':
            return { ...state, cats: action.payload }
        default:
            return state
    }
}