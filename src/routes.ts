import { Route } from '@types';

import Home from 'pages/Home';

export const routes: Route[] = [
  {
    path: '/',
    exact: true,
    component: Home,
    cache: false,
    thunksToRun: [],
  },
];
