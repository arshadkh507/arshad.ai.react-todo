import { Book } from '@mui/icons-material';
import React from 'react';

const TodoInput = (props) => {

  const {
    todoAlert: { alertTitle, alertState },
    itemTitle,
    handleChange,
    handleSubmit,
    editItem
  } = props;


  return (
    <div className="card card-body my-3">
      <div className={`alert ${ alertState ? " alert-success" : " alert-danger" }`}>
        <strong>{!alertState ? "Danger" : "Success"} </strong> {alertTitle}
      </div>
      <form className='p-3' onSubmit={handleSubmit}>
        <div className="input-group my-1">
          <div className="input-group-text bg-primary text-white">
            <Book />
          </div>
          <input type="text" className='form-control text-capitalize'
            placeholder='add a todo item'
            value={itemTitle}
            onChange={handleChange}
          />
        </div>
        <button type='submit'
          className={
            `btn font-monospace fw-bold btn-block w-100 mt-3  ${ editItem ? 'btn-success' : 'btn-primary' }`
          }>
          {editItem ? "edit item" : "add item"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;