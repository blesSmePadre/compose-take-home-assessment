import React, { useCallback, useRef, useState } from 'react';

import { CommonProps } from './types';

import { actions } from 'models/commands';
import { commandsListSelector } from 'models/commands/selectors';

import useToggle from 'hooks/useToggle';

import * as S from './Commands.styled';

type Props = {
  onAddCommand: ActionType<typeof actions.addCommand>;
  onRemoveCommand: ActionType<typeof actions.removeCommand>;
  commandsList: ReturnType<typeof commandsListSelector>;
} & CommonProps;

const Commands = ({
  onAddCommand,
  onRemoveCommand,
  onEvalCommand,
  commandsList,
}: Props) => {
  const [inEditMode, toggleEditMode] = useToggle(false);
  const [query, setSearchQuery] = useState('');

  const $commandNameInputRef = useRef<HTMLInputElement>(null);
  const $commandExpInputRef = useRef<HTMLInputElement>(null);
  const $searchInputRef = useRef<HTMLInputElement>(null);

  const handleChangeSearchQuery = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      setSearchQuery(e.currentTarget.value);
    },
    []
  );

  const handleAddCustomCommand = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (
        $commandNameInputRef.current!.value &&
        $commandExpInputRef.current!.value
      ) {
        toggleEditMode();
        onAddCommand({
          title: $commandNameInputRef.current!.value,
          exp: $commandExpInputRef.current!.value,
          custom: true,
        });
      }
    },
    [onAddCommand, toggleEditMode]
  );

  const handleRemoveCommand = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
      if (e.currentTarget.classList.contains('remove-cross')) {
        e.stopPropagation();
      }
      onRemoveCommand(id);
    },
    [onRemoveCommand]
  );

  return (
    <section>
      <S.Search
        ref={$searchInputRef}
        onChange={handleChangeSearchQuery}
        placeholder="Search for command ..."
      />
      <S.Commands>
        {commandsList
          .filter(
            ({ title }) =>
              query === '' || title.toLowerCase().includes(query.toLowerCase())
          )
          .map(({ id, title, exp, custom }) => (
            <S.Command key={title} onClick={() => onEvalCommand(exp)}>
              {title}
              {custom && (
                <S.CrossWrapper
                  className="remove-cross"
                  onClick={(e) => handleRemoveCommand(e, id)}
                >
                  <S.Cross />
                </S.CrossWrapper>
              )}
            </S.Command>
          ))}
        <S.CustomCommand onClick={!inEditMode ? toggleEditMode : undefined}>
          {inEditMode ? (
            <S.CustomCommandForm onSubmit={handleAddCustomCommand}>
              <S.CommandInput
                ref={$commandNameInputRef}
                placeholder="Type the command name ..."
              />
              <S.CommandInput
                ref={$commandExpInputRef}
                placeholder="Type a valid javascript expression ... (x: the input content) => { your expression }"
              />
              <S.SaveCommand type="submit">Add command</S.SaveCommand>
            </S.CustomCommandForm>
          ) : (
            'Click to create custom one'
          )}
        </S.CustomCommand>
      </S.Commands>
    </section>
  );
};

export default Commands;
