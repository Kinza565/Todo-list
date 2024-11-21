"use client";

import { useState } from 'react';

interface Task {
  id: number;
  text: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>('');

  const handleAddTask = (): void => {
    if (task.trim()) {
      const newTask: Task = { id: Date.now(), text: task.trim() };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const handleDeleteTask = (id: number): void => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input"
        />
        <button onClick={handleAddTask} className="add-button">
          Add
        </button>
      </div>
      <ul className="list">
        {tasks.map((t) => (
          <li key={t.id} className="list-item">
            <span>{t.text}</span>
            <button onClick={() => handleDeleteTask(t.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
