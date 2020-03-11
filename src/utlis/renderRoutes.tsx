import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { IRoutes } from '../router/routes';

export interface IRenderProps {
    routes: IRoutes[];
    authed: boolean;
    authPath: string;
    extraProps?: any;
    switchProps?: any;
}

const renderRoutes = ({routes, authed, authPath = '/login', extraProps = {}, switchProps = {}}:IRenderProps) => routes ? (
    <Switch {...switchProps}>
        {routes.map((route, i) => (
            <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                // strict={route.strict}
                render= {(props) => {
                    if (!route.requireAuth || authed || route.path === authPath) {
                        return <route.component {...props} {...extraProps} route={route} />
                    }
                    return <Redirect to={{ pathname: authPath, state: {from: props.location }}} />
                }}
            />
        ))}
    </Switch>
) : null

export default renderRoutes