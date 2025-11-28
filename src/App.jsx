// src/App.js - Green Version
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);

  const addOrUpdateTodo = () => {
    if (task.trim() === '') return;

    if (editId) {
      setTodos(todos.map(todo => (todo.id === editId ? { ...todo, text: task } : todo)));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: task }]);
    }

    setTask('');
  };

  const editTodo = (todo) => {
    setTask(todo.text);
    setEditId(todo.id);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Todo Ap (Green)</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add or update task..."
          />
          <button onClick={addOrUpdateTodo} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            {editId ? 'Update' : 'Add'}
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map(todo => (
            <li key={todo.id} className="flex justify-between items-center border p-2 rounded">
              <span>{todo.text}</span>
              <div className="space-x-2">
                <button onClick={() => editTodo(todo)} className="text-blue-500 hover:text-blue-700">Edit</button>
                <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
