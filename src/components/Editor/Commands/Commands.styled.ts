import styled from 'styled-components';

import { Colors } from '@types';

import { textMixin } from 'styles/helpers';

export const Commands = styled.ul`
  width: 570px;
  border: 2px solid ${Colors.cyan};
  border-radius: 5px;
  background: ${Colors.white};
`;

export const Search = styled.input`
  padding: 9px 11px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: ${Colors.white};

  &::placeholder {
    color: ${Colors.alto};
  }

  ${textMixin({
    size: 15,
    color: 'black',
  })}
`;

export const Command = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: ${Colors.alto};
  }

  &:not(:last-child) {
    border-bottom: 2px solid ${Colors.cyan};
  }

  ${textMixin({
    size: 15,
    color: 'black',
  })}
`;

export const CustomCommand = styled(Command)`
  font-weight: bold;

  &:hover {
    background: ${Colors.white};
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CustomCommandForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CrossWrapper = styled.div`
  padding: 5px;
  position: relative;
`;

export const Cross = styled.div`
  width: 12px;
  height: 12px;
  position: relative;

  &::after,
  &::before {
    position: absolute;
    left: 5px;
    content: ' ';
    height: 13px;
    width: 2px;
    background-color: ${Colors.black};
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const CommandInput = styled.input`
  width: 100%;
  border: 1px solid ${Colors.black};
  border-radius: 3px;
  padding: 5px;
  font-weight: normal;

  &::placeholder {
    color: ${Colors.alto};
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const SaveCommand = styled.button`
  align-self: flex-end;
  padding: 7px 10px;
  border-radius: 3px;
  background: ${Colors.vermilion};
  color: ${Colors.white};
`;
