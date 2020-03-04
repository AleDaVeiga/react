import React, { Component } from 'react'
import Cat from '../cat/cat'

class Dashboard extends Component {
    render() {
        return (
            <div className='content-wrapper'>
                <section className='content'>
                    <div className='container-fluid'> 
                        <Cat />
                    </div>
                </section>
            </div>
        )
    }
}

export default Dashboard