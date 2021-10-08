import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

import { Colors } from '@types';

import { textMixin, noSelect } from 'styles/helpers';

export const Root = styled.section<LayoutProps>`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 20px;
  background: ${Colors.white};
  color: ${Colors.dustyGray};

  ${layout}

  ${textMixin({
    size: 15,
    color: 'black',
  })}

  ${noSelect}
`;

export const Placeholder = styled.button`
  color: ${Colors.alto};
`;
