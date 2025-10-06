const KEY = "todo_app_tasks_v1";

export const loadTasks = () => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  } catch {}
};
