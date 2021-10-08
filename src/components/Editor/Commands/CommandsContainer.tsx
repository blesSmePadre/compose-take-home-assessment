import React from 'react';

import { CommonProps } from './types';

import Commands from './Commands';

import { useActionWithPayload } from 'hooks/useAction';
import { useSelector } from 'hooks/useSelector';
import { actions } from 'models/commands';
import { commandsListSelector } from 'models/commands/selectors';

const CommandsContainer = (props: CommonProps) => {
  const onAddCommand = useActionWithPayload(actions.addCommand);
  const onRemoveCommand = useActionWithPayload(actions.removeCommand);

  const commandsList = useSelector(commandsListSelector);

  return (
    <Commands
      {...props}
      onAddCommand={onAddCommand}
      onRemoveCommand={onRemoveCommand}
      commandsList={commandsList}
    />
  );
};

export default CommandsContainer;
