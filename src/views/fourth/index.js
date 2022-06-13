import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
class Fourth extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  
  showLocation() {
    console.log(this.props.location)
  }

  render () {
    return (
      <div>
        <div>这是第四个路由，展示类组件，以及如何处理路由location（location已从新的react-router-dom v6移除）</div>
        <div onClick={ () => { this.showLocation() } }>显示当前location</div>
      </div>
    )
  }
}

function WidthRouterParam (props) {
  const location = useLocation()
  const params = useParams()
  return <Fourth {...props} location={ location } params={ params } />
}

export default WidthRouterParam