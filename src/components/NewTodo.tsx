import React from 'react';

import { useRef } from 'react';

import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (todoText: string) => void }> = (
  props
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
