import { Suspense, lazy } from 'react';
// import { IRoute } from '../utils/routes/IRoute';
import Content from '@/layout/Content';

const lazyLoad = (Component: React.LazyExoticComponent<React.FC>) => (
  <Suspense fallback={<div></div>}>
    <Component />
  </Suspense>
);

export const appRoutes = [
  {
    path: '/',
    element: <Content />,
    children: [
      {
        index: true,
        element: lazyLoad(lazy(() => import('./entrust/entrust'))),
      },
      {
        index: false,
        path: 'shop',
        element: lazyLoad(lazy(() => import('./shop/shop'))),
      },
      {
        path: 'profile',
        element: lazyLoad(lazy(() => import('./user/profile'))),
      },
    ],
  },
  // {
  //   path: '/login', //登录
  //   Element: () => import('./login/login'),
  //   lazyload: true,
  // },
];
