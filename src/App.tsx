import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import { hot } from 'react-hot-loader';
import { renderRoutes } from 'react-router-config';
// import renderRoutes from './utlis/renderRoutes';
import routes from './router/routes';
import { connect } from 'react-redux';
import { IState } from './declare/store';

const mapStateToProps = (state:IState) => {
  return {
    authed: state.authed
  }
}

// const authPath = '/login';


const App: React.FC<any> = props => {
  // const { authed } = props
  // const RRoutes = {routes, authed, authPath}
  return (
    <Router>
      <div>
        
        { renderRoutes(routes) }
        {/**
         * <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
         */}
      </div>
    </Router>
  );
}

export default connect(mapStateToProps, null)(App);
