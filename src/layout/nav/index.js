import emitter from '@/utils/eventmanager.js'
import './index.scss'
function Nav () {

  const changeRoute = (path) => {
    emitter.emit('routeChange', path)
  }

  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-item" onClick={ () => { changeRoute('/first') } }>first</div>
        <div className="nav-item" onClick={ () => { changeRoute('/second') } }>second</div>
        <div className="nav-item" onClick={ () => { changeRoute('/third') }}>third</div>
        <div className="nav-item" onClick={ () => { changeRoute('/fourth') } }>fourth</div>
      </div>
      <div className="nav-right">
        username
      </div>
    </div>
  )
}

export default Nav