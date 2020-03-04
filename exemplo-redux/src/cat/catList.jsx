import React from 'react'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(cat => (
                <div className='card' key={cat.id}>
                    <div className='card-body'>
                        <img className="img-fluid pad" src={cat.download_url} alt={cat.author}/>
                    </div>
                </div>
        ))
    }

    return (
        <div className='card-columns'>
            {renderRows()}
        </div>
    )
}