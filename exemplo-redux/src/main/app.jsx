import React, { Component } from 'react'
import '../common/template/dependencies'
import Footer from '../common/template/footer'
import SideBar from '../common/template/sideBar'
import Dashboard from '../dashboard/dashboard'

export default class App extends Component {
  render() {
    return (
          <div className='wrapper'>
            <SideBar />
            <Dashboard />
            <Footer />
          </div>
        )
    }
}
