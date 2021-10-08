import React, { useCallback, useEffect, useRef, useState } from 'react';

import Commands from './Commands';

import * as S from './Editor.styled';

const Editor = () => {
  const [inEditMode, setEditMode] = useState(false);
  const [showCommands, setShowCommands] = useState(false);
  const [content, setContent] = useState('');

  const $editorRef = useRef<HTMLTextAreaElement>(null);

  const handleEditorChange = useCallback(
    (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
      if (e.currentTarget.value.endsWith('/')) {
        setShowCommands(true);
        setEditMode(false);

        const value = e.currentTarget.value.slice(0, -1);
        $editorRef.current!.value = value;
        setContent(value);
      }
    },
    []
  );

  const handleSetEditMode = useCallback(() => {
    setEditMode(true);
    setShowCommands(false);
  }, []);

  /* eslint-disable no-eval */
  const handleEvalCommand = useCallback(
    (exp: string) => {
      if (content) {
        try {
          setContent(eval(`((x) => ${exp})('${content}')`));
        } catch (err) {
          console.error('error', err);
        }
      }

      setShowCommands(false);
    },
    [content]
  );

  const ctrlZListener = useCallback(
    (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        setShowCommands(false);
        setContent(`${content}/`);
        setEditMode(true);
      }
    },
    [content]
  );

  useEffect(() => {
    if (showCommands) {
      document.addEventListener('keydown', ctrlZListener);
    }

    return () => {
      document.removeEventListener('keydown', ctrlZListener);
    };
  }, [showCommands, ctrlZListener]);

  useEffect(() => {
    if (inEditMode) {
      $editorRef.current!.value = content;

      if (!showCommands) {
        $editorRef.current!.focus();
      }
    }
  }, [inEditMode, showCommands, content]);

  useEffect(() => {
    const clickHandler = (e: Event) => {
      if (!(e.target as HTMLElement).classList.contains('editor')) {
        setContent($editorRef.current!.value);
        setEditMode(false);
      }
    };

    if (inEditMode) {
      document.body.addEventListener('click', clickHandler);
    }

    return () => {
      document.body.removeEventListener('click', clickHandler);
    };
  }, [inEditMode]);

  return (
    <>
      {inEditMode ? (
        <S.Root
          // @ts-ignore
          as="input"
          ref={$editorRef}
          className="editor"
          onChange={handleEditorChange}
        />
      ) : (
        <S.Root onDoubleClick={handleSetEditMode}>
          {content || (
            <S.Placeholder>
              Double click to start typing (type &apos;/&apos; for commands)
            </S.Placeholder>
          )}
        </S.Root>
      )}
      {showCommands && <Commands onEvalCommand={handleEvalCommand} />}
    </>
  );
};

export default Editor;
