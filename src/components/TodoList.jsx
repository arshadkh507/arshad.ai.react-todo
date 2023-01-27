import React from 'react';
import TodoItem from "./TodoItem";
const TodoList = ({ items, deleteItems, handleDelete, handleEdit }) => {
  return (
    <ul className="list-group pt-3  my-5 shadow-sm" style={{ backgroundColor: "hsl(120, 100%, 97%)" }}>
      <h3 className="font-monospace fw-bold text-capitalize text-center">todo list</h3>
      {items.map(item => {
        return (
          <TodoItem key={item.id}
            itemTitle={item.itemTitle}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        );
      })}
      <button type='button'
        onClick={deleteItems}
        className='font-monospace mt-5 btn w-100 btn-danger btn-block text-capitalize'
      >clear list</button>
    </ul>
  );
};

export default TodoList;