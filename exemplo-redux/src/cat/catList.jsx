import React from 'react'
import { connect } from 'react-redux'

const CatList = props => {
    const renderRows = () => {
        const cats = props.cats || []
        return cats.map(cat => (
                <div className='card' key={cat.id}>
                    <div className='card-body'>
                        <img className="img-fluid pad" src={cat.url} alt='Um gato qualquer'/>
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