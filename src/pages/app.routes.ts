import { IRoute } from '../utils/routes/IRoute';

export const appRoutes: IRoute[] = [
  {
    path: '/',
    component: () => import('./entrust/entrust'),
    lazyload: true,
  },
  {
    path: '/entrust',
    component: () => import('./entrust/entrust'),
    lazyload: true,
  },
  {
    path: '/shop',
    component: () => import('./shop/shop'),
    lazyload: true,
  },
  {
    path: '/profile',
    component: () => import('./user/profile'),
    lazyload: true,
  },
  {
    path: '/login', //登录
    component: () => import('./login/login'),
    lazyload: true,
  }
];