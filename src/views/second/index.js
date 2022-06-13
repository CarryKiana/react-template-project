import IndexApi from '@/api/index'
function Second () {
  const handleTest = () => {
    IndexApi.test().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div onClick={ () => { handleTest() } }>
      这是第二个路由axios 调用
    </div>
  )
}

export default Second