import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterCats } from './categoryActions'

const CategoryList = props => {
    const renderRows = () => {
        const categories = props.categories || []
        return categories.map(ct => (
                <li className="nav-item" key={ct.id}>
                    <a href="#" className="nav-link" onClick={() => props.filterCats(ct.id)}>
                        <i className='nav-icon fa fa-bars'></i>
                        <p>
                            {ct.name}
                        </p>
                    </a>
                </li>
        ))
    }

    return (
        <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
            {renderRows()}
        </ul>
    )
}

const mapStateToProps = state => ({ categories: state.exemplo.categories })
const mapDispatchToProps = dispatch => bindActionCreators({ filterCats }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)