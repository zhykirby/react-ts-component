import AsyncComponent from '../component/AsyncComponent/asyncComponent';

const layout = AsyncComponent(() => import('../pages/main/main'));
const login = AsyncComponent(() => import('../pages/login/login'));
const test = AsyncComponent(() => import('../pages/test/test'))

export interface IRoutes {
    path: string;
    name: string;
    exact?: boolean;
    component: any;
    key?: number;
    requireAuth?: boolean;
    routes?: IRoutes[];
}

const routes:IRoutes[] = [
    {
        path: '/',
        name: 'main',
        exact: true,
        component: layout,
    },
    {
        path: '/login',
        name: 'login',
        component: login,
    },
    {
        path: '/main',
        name: 'main',
        component: layout,
        routes: [
            {
                path: '/main/test',
                name: 'test',
                component: test,
            }
        ]
    },
]

export default routes;