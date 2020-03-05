import React from 'react'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(ct => (
                <li className="nav-item" key={ct.id}>
                    <a href="/" className="nav-link">
                        <i className='nav-icon fa fa-bars'></i>
                        <p>
                            {ct.author}
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