import axios from 'axios'


export const getCategories = () => {
    return dispatch => {
        axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY";
        axios.get('https://api.thecatapi.com/v1/categories').then(resp => dispatch({type: 'CATEGORY_LIST', payload: resp.data}))
    }
}

export const filterCats = (category_id) => {
    return dispatch => {
        const filter = { limit: 10, size: "small" , category_ids: category_id ? category_id : null };
        axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY";
        axios.get('https://api.thecatapi.com/v1/images/search', { params: filter }).then(resp => dispatch({type: 'CAT_LIST', payload: resp.data}))
    }
}