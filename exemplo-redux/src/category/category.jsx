import axios from 'axios'
import React, { Component } from 'react'
import CategoryList from './categoryList'

const URL = 'http://api.thecatapi.com/v1/categories'

export default class Category extends Component {
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
            <section className='sidebar'>
                <nav className='mt-2'>
                    <CategoryList list={this.state.list} />
                </nav>
            </section>
        )
    }
}