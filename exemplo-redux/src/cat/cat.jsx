import React, { Component } from 'react'
import axios from 'axios'

import CatList from './catList'

const URL = 'http://api.thecatapi.com/v1/images/search?limit=10&category_ids=1'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [] }
        this.refresh()
    }

    refresh() {
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['x-api-key'] = '47797718-bee7-4d03-80f0-47714f42f84b'
        axios.get(`${URL}`).then(resp => this.setState({...this.state, list: resp.data}))
    }

    render() {
        return (
            <div>
                <CatList list={this.state.list} />
            </div>
        )
    }
}