import React, { useState } from "react";

export default function Todo() {
  const [inputValue, changeInputValue] = useState("");

  const [doList, updateDoList] = useState([]);

  const addToList = item => {
    updateDoList([...doList, item]);
  };

  const removeFromList = item => {
    const nextList = doList.filter(element => element !== item);
    updateDoList(nextList);
  };

  return (
    <div>
      <h1>To Do List:</h1>
      <div>
        <h3>Add Item</h3>
        <input
          type="text"
          value={inputValue}
          onChange={e => changeInputValue(e.target.value)}
        />
        <button onClick={() => addToList(inputValue)}>+</button>
      </div>
      <ul style={{ listStyle: "none", paddingLeft: 0, marginLeft: 0 }}>
        {doList.map((item, index) => (
          <>
            <li key={index}>
              {index + 1}: {item}
            </li>
            <button onClick={() => removeFromList(item)}>-</button>
          </>
        ))}
      </ul>
    </div>
  );
}
