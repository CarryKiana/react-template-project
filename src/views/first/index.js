import { Button } from 'antd'
function First () {
  return (
    <div>
      这是第一个路由,展示的是普通的函数组件,引入anti design
      <div>
      <Button type='link' onClick={ () => {  } }>按钮</Button>
      </div>
    </div>
  )
}

export default First