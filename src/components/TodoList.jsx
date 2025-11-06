import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Invent new traffic lights", done: false },
    { text: "Rehearse a movie scene", done: false },
    { text: "Improve spectrum technology", done: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return; // ignore empty input
    setTodos([...todos, { text: newTodo, done: false }]);
    setNewTodo("");
  };

  const toggleDone = (index) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  };

  const completedCount = todos.filter((t) => t.done).length;

  return (
    <div className="max-w-sm mx-auto mt-8 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-indigo-600 text-center">
        Hedy Lamarr's Todo List
      </h1>

      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="w-24 h-24 rounded-full border-2 border-indigo-400"
        />
      </div>

      {/* Add new todo */}
      <div className="flex mb-4">
        <input
          className="flex-1 border border-gray-300 rounded-l px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-r"
        >
          Add
        </button>
      </div>

      {/* Todo list */}
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleDone(index)}
            className={`cursor-pointer select-none border rounded p-2 transition 
              ${
                todo.done
                  ? "bg-gray-100 text-gray-500 line-through"
                  : "bg-indigo-50 hover:bg-indigo-100 text-gray-800"
              }`}
          >
            {todo.text}
          </li>
        ))}
      </ul>

      {/* Stats */}
      <p className="mt-4 text-sm text-gray-600 text-center">
        Total: <span className="font-semibold">{todos.length}</span> | Completed:{" "}
        <span className="font-semibold text-green-600">{completedCount}</span>
      </p>
    </div>
  );
}
