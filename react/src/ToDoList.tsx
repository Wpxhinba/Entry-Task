import React, { useState } from "react";

interface ToDoItem {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoApp: React.FC = () => {
  const [toDoList, setToDoList] = useState<ToDoItem[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addToDoItem = () => {
    if (inputValue.trim() !== "") {
      const newToDo: ToDoItem = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setToDoList([...toDoList, newToDo]);
      setInputValue("");
    }
  };

  const removeToDoItem = (id: number) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  const toggleComplete = (id: number) => {
    setToDoList(
      toDoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <header className="bg-white shadow-md w-full p-4 text-center">
        Хийх зүйлсийн жагсаалт
      </header>
      <main className="flex-1 overflow-auto p-4 w-full max-w-3xl">
        <div className="bg-white p-8 rounded-md shadow-md">
          <ul className="list-none p-0">
            {toDoList.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleComplete(item.id)}
                    className="mr-2"
                  />
                  <label className={item.completed ? "line-through" : ""}>
                    {item.text}
                  </label>
                </div>
                <button
                  onClick={() => removeToDoItem(item.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
                >
                  Устгах
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="bg-white shadow-md w-full p-4 flex justify-center gap-2">
        <input
          type="text"
          placeholder="Хийх зүйлээ бичнэ үү?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={addToDoItem}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
        >
          Нэмэх
        </button>
      </footer>
    </div>
  );
};

export default ToDoApp;
