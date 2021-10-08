import { css } from 'styled-components';

import { ColorsStrings, Colors } from '@types';

export const textMixin = ({
  size = 20,
  textTransform = 'none',
  align = 'left',
  weight = 'normal',
  color = 'white',
}: {
  size?: number | string;
  weight?: number | 'normal' | 'bold';
  color?: ColorsStrings;
  align?: 'left' | 'center' | 'right';
  textTransform?: 'none' | 'lowercase' | 'uppercase';
}) => css`
  ${`font-size: ${typeof size === 'number' ? `${size}px` : size}`};
  ${`text-align: ${align}`};
  ${`text-transform: ${textTransform}`};
  ${`font-weight: ${weight}`};
  ${`color: ${Colors[color]}`};
`;

export const noSelect = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
