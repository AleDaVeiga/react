import React, { Component } from 'react'
import '../common/template/dependencies'
import Footer from '../common/template/footer'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Dashboard from '../dashboard/dashboard'

export default class App extends Component {
  render() {
    return (
          <div className='wrapper'>
            <Header />
            <SideBar />
            <Dashboard />
            <Footer />
          </div>
        )
    }
}
