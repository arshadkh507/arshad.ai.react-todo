import { Delete, Edit } from '@mui/icons-material';
import React from 'react';

const TodoItem = ({ itemTitle, handleDelete, handleEdit }) => {




  return (
    <li className='list-group-item border border border-bottom-1   border-bottom-1 border-top-1 text-capitalize d-flex align-items-center justify-content-between m-2' >
      <h6 className='pt-2'>{itemTitle}</h6>
      <div className="todo-icon">
        <span className=' text-success btn' onClick={handleEdit}>
          <Edit />
        </span>
        <span className="text-danger btn" onClick={handleDelete}>
          <Delete />
        </span>

      </div>
    </li>
  );
};

export default TodoItem;