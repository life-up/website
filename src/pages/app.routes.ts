import { IRoute } from '../utils/routes/IRoute';

export const appRoutes: IRoute[] = [
  {
    path: '/',
    component: () => import('./state/state'),
    lazyload: true,
  },
  {
    path: '/entrust',
    component: () => import('./entrust/entrust'),
    lazyload: true,
  },
  {
    path: '/login', //登录
    component: () => import('./login/login'),
    lazyload: true,
  }
];