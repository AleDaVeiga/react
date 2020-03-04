import React from 'react'

export default props => (
    <header className='main-header navbar navbar-expand navbar-white navbar-light'>
        <ul className="navbar-nav">
            <li className="nav-item d-none d-sm-inline-block">
                <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <a href="/categorias" className="nav-link">Categorias</a>
            </li>
        </ul>
    </header>
)