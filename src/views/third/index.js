import React from 'react'
import store from '@/stores/index'
class Third extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      token: ''
    }
  }
  
  componentDidMount () {
    store.subscribe(() => {
      this.setState({
        token: store.getState().token.value
      })
    })
  }
  
  render () {
    return (
      <div>
        这是第三个路由,展示类组件,顺便监听全局状态变化
        <span>{ this.state.token}</span>
      </div>
    )
  }
}

export default Third