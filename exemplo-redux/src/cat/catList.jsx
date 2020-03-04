import React from 'react'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(cat => (
            <div id={cat.id}>
                <img src={cat.download_url} alt={cat.author}/>
            </div>
        ))
    }

    return (
        <div className='table'>
            {renderRows()}
        </div>
    )
}