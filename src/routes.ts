import { Route } from '@types';

import Home from 'pages/Home';

export const routes: Route[] = [
  {
    path: '/compose-take-home-assessment',
    exact: true,
    component: Home,
    cache: false,
    thunksToRun: [],
  },
];
