import React from 'react'
import { connect } from 'react-redux'

const CatList = props => {
    const renderRows = () => {
        const cats = props.cats || []
        return cats.map(cat => (
                <div className='card' key={cat._id}>
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

const mapStateToProps = state => ({ cats: state.exemplo.cats })
export default connect(mapStateToProps)(CatList)