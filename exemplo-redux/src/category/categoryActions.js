import axios from 'axios'

axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = "47797718-bee7-4d03-80f0-47714f42f84b";

export const getCategories = () => {
    return dispatch => {
        axios.get(`/categories`).then(resp => dispatch({type: 'CATEGORY_LIST', payload: resp.data}))
    }
}

export const filterCats = (category_id) => {
    return dispatch => {
        const filter = category_id ? `?category_ids=${category_id}&limit=10` : ''
        axios.get(`/images/search${filter}`).then(resp => dispatch({type: 'CAT_LIST', payload: resp.data}))
    }
}