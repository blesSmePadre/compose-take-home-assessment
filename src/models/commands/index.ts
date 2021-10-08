/* eslint-disable no-param-reassign, @typescript-eslint/no-unused-vars  */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Command, sliceName } from './types';

const initialState: { list: Command[] } = {
  list: [
    {
      id: 1,
      title: 'Trim',
      exp: 'x.trim()',
      custom: false,
    },
    {
      id: 2,
      title: 'To uppper case',
      exp: 'x.toUpperCase()',
      custom: false,
    },
  ],
};

const commandsSlide = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addCommand(state, { payload }: PayloadAction<Omit<Command, 'id'>>) {
      const last = state.list[state.list.length - 1];
      state.list.push({ id: last ? last.id + 1 : 1, ...payload });
    },
    removeCommand(state, { payload }: PayloadAction<number>) {
      state.list = state.list.filter(({ id }) => id !== payload);
    },
  },
});

export const { actions } = commandsSlide;

export default commandsSlide.reducer;
