import React from 'react'
import { HashRouter as Router, Routes, Route,  Navigate } from "react-router-dom"

import HandleNavigate from '@/components/event'

import First from '../views/first'
import Second from '../views/second'
import Third from '../views/third'
import Fourth from '../views/fourth'

import Layout from '../layout/index'
import Nav from '../layout/nav'

function RouterList () {
  return (
    <Layout>
      <Nav />
      <Routes>
        <Route strict exact path='' element={ <First /> }></Route>
        <Route strict exact path='/second' element={ <Second /> }></Route>
        <Route strict exact path='/third' element={ <Third /> }></Route>
        <Route strict exact path='/fourth' element={ <Fourth /> }></Route>
      </Routes>
    </Layout>
  )
}
class Routers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <Router>
        <HandleNavigate />
        <Routes>
          {/* 通用路由 */}
            <Route path='/' element={ <RouterList /> } ></Route> 
          {/* 权限路由 */}
          {/* 404 */}
          <Route  path="*" element={<Navigate to='/' />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default Routers
