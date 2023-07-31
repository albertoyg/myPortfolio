import './index.scss';
import Bottombar from '../Bottombar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App">
            <Bottombar /> 
            <div className='page'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout