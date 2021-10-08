import { createSelector } from 'reselect';

import { RootState } from '../index';

export const rootSelector = createSelector(
  (state: RootState) => state,
  (state) => state.commands
);

export const commandsListSelector = createSelector(
  rootSelector,
  ({ list }) => list
);
