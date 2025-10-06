import TaskItem from "./TaskItem";

export default function TaskList({ tasks, handlers }) {
  return (
    <div className="mt-6 w-full sm:w-11/12 mx-auto">
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center text-sm">No tasks yet. Add one!</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((t) => (
            <TaskItem
              key={t.id}
              task={t}
              onToggleComplete={handlers.toggleComplete}
              onDelete={handlers.deleteTask}
              onRemoveTag={handlers.removeTag}
              onStatusChange={handlers.updateStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
}
