import * as React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'
//import { renderRoutes } from 'react-router-config';
//import HomeRoute from './pages/Home/route';
//import UserRoute from './pages/User/route';
//const routes = [...HomeRoute, ...UserRoute];

class Example extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                    {/** renderRoutes(routes) */}
                </div>
            </Router>
        )
    }
}

export default Example;