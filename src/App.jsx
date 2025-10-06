import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { sampleTasks } from "./data/sampleTasks";
import { loadTasks, saveTasks } from "./utils/storage";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = loadTasks();
    return stored && stored.length ? stored : sampleTasks;
  });

  useEffect(() => saveTasks(tasks), [tasks]);

  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => console.log(data))

  const addTask = (title, tags) => {
    const newTask = {
      id: Date.now(),
      title,
      status: "Pending",
      tags,
      createdAt: new Date().toISOString(),
      completedAt: null,
    };
    setTasks((s) => [newTask, ...s]);
  };

  const deleteTask = (id) => setTasks((s) => s.filter(t => t.id !== id));

  const toggleComplete = (id) => {
    setTasks((s) =>
      s.map((t) =>
        t.id === id
          ? {
              ...t,
              status: t.status === "Completed" ? "Pending" : "Completed",
              completedAt: t.status === "Completed" ? null : new Date().toISOString(),
            }
          : t
      )
    );
  };

  const updateStatus = (id, newStatus) => {
    setTasks((s) =>
      s.map((t) =>
        t.id === id
          ? {
              ...t,
              status: newStatus,
              completedAt: newStatus === "Completed" ? new Date().toISOString() : null,
            }
          : t
      )
    );
  };

  const removeTag = (id, tag) => {
    setTasks((s) => s.map(t => t.id === id ? { ...t, tags: t.tags.filter(x => x !== tag) } : t));
  };

  const handlers = { deleteTask, toggleComplete, updateStatus, removeTag };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <Header />
        <TaskInput onAdd={addTask} />
        <TaskList tasks={tasks} handlers={handlers} />
      </div>
    </div>
  );
}
