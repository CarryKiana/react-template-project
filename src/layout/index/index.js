import React from "react"
import './index.scss'
function Layout (props) {
  return (
    <div className={ 'layout ' + (props.className ? props.className : '') }>
      <div className="layout-content">
        { props?.children }
      </div>
      <div className="layout-footer">
        this is the page footer
      </div>
    </div>
  )
}

export default Layout