import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  addItem,
  selectTodos
} from './todoSlice';


export default function Todos() {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  const [newItemName, setNewItemName] = useState('');

  // const incrementValue = Number(incrementAmount) || 0;


  return (
    <>
      
        <p>{todos.length}</p>
  
  {
    todos.map(
      (item, index)=>(
        <div key={index}>{item.name} {item.status}</div>
      )
    )
  }
    
      <button
        className=""
        aria-label="Decrement value"
        onClick={() => dispatch(addItem("babs!"))}
      >Add item</button>
    </>
  );
}
