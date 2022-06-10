import React from 'react'
class Fourth extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  
  render () {
    return (
      <div>
        这是第四个路由，展示类组件，以及如何处理路由location（location已从新的react-router-dom v6移除）
      </div>
    )
  }
}

export default Fourth