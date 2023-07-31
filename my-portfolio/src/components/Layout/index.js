import './index.scss';
import Bottombar from '../Bottombar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App">
            <Bottombar /> 
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet />

                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span>
                        <span className='bottom-tag-html'>&lt;/html&gt;</span>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Layout