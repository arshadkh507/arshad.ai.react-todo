import React, { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import usid from "usid";

try {
  if ((JSON.parse(localStorage.getItem('todo')))) {
    var localstorageItems = (JSON.parse(localStorage.getItem('todo'))).items;
  } else {
    localstorageItems = [];
  }

} catch (error) {
  console.log(error);
}

const App = () => {


  const [ todo, setTodo ] = useState({
    items: localstorageItems ? localstorageItems : [],
    id: 0,
    item: "",
    editItem: false,
  });

  useEffect(() => {
    const localTodo = JSON.stringify(todo);
    localStorage.setItem('todo', localTodo);
  }, [ todo.items ]);

  const [ todoAlert, setTodoAlert ] = useState({
    alertTitle: "You can input your Todo item  ",
    alertState: true
  });

  const alertHandler = (title, state) => {
    return setTodoAlert({
      alertTitle: title,
      alertState: state
    });
  };

  const handleChange = (e) => {
    setTodo(prevTodo => {
      return { ...prevTodo, item: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemValue = todo.item === "";
    if (!itemValue) {
      const newItem = {
        id: todo.id,
        itemTitle: todo.item
      };
      alertHandler("Congrijulation you have intered your item", true);
      const updatedItems = [ ...todo.items, newItem ];
      setTodo({
        items: updatedItems,
        item: '',
        id: usid.uid(),
        editItem: false
      });
      return;
    }
    return alertHandler("Please input you item first", false);
  };

  const clearList = () => {
    setTodo({
      items: []
    });
    alertHandler("You Cleared! Todo List", true);
  };

  const handleDelete = (deleteItemId) => {
    const filterItems = todo.items.filter(item => item.id !== deleteItemId);
    const deleteItem = todo.items.find(item => item.id === deleteItemId);
    setTodo({
      items: filterItems,
    });
    alertHandler(`You Deleted! ${ deleteItem.itemTitle } item from Todo List`, false);
  };


  const handleEdit = (editItemId) => {
    const filterItems = todo.items.filter(item => item.id !== editItemId);
    const selectedItem = todo.items.find(item => item.id === editItemId);
    setTodo({
      items: filterItems,
      item: selectedItem.itemTitle,
      id: editItemId,
      editItem: true
    });
    alertHandler("Now you can edit your item", true);
  };



  return (
    <div className="container" >
      <div className='row'>
        <div className="col-11 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center font-monospace fw-bold">Todo input</h3>
          <TodoInput
            itemTitle={todo.item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={todo.editItem}
            todoAlert={todoAlert}
          />
          <TodoList
            items={todo.items}
            deleteItems={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
