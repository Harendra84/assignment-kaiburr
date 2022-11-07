import { Link } from 'react-router-dom'
import '../css/Style.css'

const ServerHome = () => {
  return (
    <div className='parent-home'>
      <div className='home'>
        <h1>Welcome Server Root</h1>
        <Link to='/Servers'>
          <button className='btn btn-outline-secondary btn-lg'>View Servers</button>
        </Link>
      </div>
    </div>
  )
}

export default ServerHome;