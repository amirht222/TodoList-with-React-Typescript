import React from 'react';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import Todo from '../models/Todo';

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          id={item.id}
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
