import React from 'react'
import { HashRouter as Router, Routes, Route,  Navigate } from "react-router-dom"

import First from '../views/first'
import Second from '../views/second'
import Third from '../views/third'
import Fourth from '../views/fourth'

class Routers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <Router>
        <Routes>
          {/* 通用路由 */}
            <Route strict exact path='/' element={ <First /> }></Route>
            <Route strict exact path='/second' element={ <Second /> }></Route>
            <Route strict exact path='/third' element={ <Third /> }></Route>
            <Route strict exact path='/fourth' element={ <Fourth /> }></Route>
          {/* 权限路由 */}
          {/* 404 */}
          <Route  path="*" element={<Navigate to='/' />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default Routers
