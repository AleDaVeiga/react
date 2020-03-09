import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCategories } from './categoryActions'
import CategoryList from './categoryList'

class Category extends Component {
    componentWillMount() {
        this.props.getCategories()
    }

    render() {
        return (
            <section className='sidebar'>
                <nav className='mt-2'>
                    <CategoryList />
                </nav>
            </section>
        )
    }
}

const mapStateToProps = state => ({ category: state.exemplo.category })
const mapDispatchToProps = dispatch => bindActionCreators({ getCategories }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Category)