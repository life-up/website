import { IRoute } from '../utils/routes/IRoute';

export const appRoutes: IRoute[] = [{
    path: '/', //登录
    component: () => import('./login/login'),
    lazyload: true,
  }
];