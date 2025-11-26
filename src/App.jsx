// src/App.js - Blue Version (Insert Feature Only)
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [insertIndex, setInsertIndex] = useState(null);

  const addTodo = () => {
    if (task.trim() === '') return;

    if (insertIndex !== null) {
      // Insert at given index
      const updated = [...todos];
      updated.splice(insertIndex, 0, { id: Date.now(), text: task });
      setTodos(updated);
      setInsertIndex(null);
    } else {
      // Standard add
      setTodos([...todos, { id: Date.now(), text: task }]);
    }

    setTask('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startInsert = (index) => {
    setInsertIndex(index);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Todo App (Green)</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder={insertIndex !== null ? `Insert at position ${insertIndex + 1}` : "Add task..."}
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {insertIndex !== null ? "Insert" : "Add"}
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={todo.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span>{todo.text}</span>
              <div className="space-x-2">
                <button
                  onClick={() => startInsert(index)}
                  className="text-purple-500 hover:text-purple-700"
                >
                  Insert Above
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
