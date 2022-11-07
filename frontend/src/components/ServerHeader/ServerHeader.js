import { Link } from 'react-router-dom'
import './ServerHeader.css'
const ServerHeader = () => {
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="toggle-navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar-content">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/create' className='nav-link'>Add Server</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/servers' className='nav-link'>View Servers</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="box">
                    <div class="box-1"></div>
                    <div class="box-2"></div>
                </div>
            </header>
        </div>
    )
}

export default ServerHeader;