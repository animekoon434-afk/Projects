import TagBadge from "./TagBadge";

export default function TaskItem({ task, onToggleComplete, onDelete, onRemoveTag, onStatusChange }) {
  const fmt = (iso) => (iso ? new Date(iso).toLocaleString() : "—");

  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-sm flex flex-col justify-between h-full border border-gray-700">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div
              onClick={() => onToggleComplete(task.id)}
              className={`cursor-pointer text-sm font-semibold ${task.status === "Completed" ? "line-through text-gray-500" : "text-white"}`}
            >
              {task.title}
            </div>
            <div className="text-xs text-gray-400 mt-1">
              <span>Created: {fmt(task.createdAt)}</span>
              {task.status === "Completed" && <span className="ml-2">• Done: {fmt(task.completedAt)}</span>}
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <select
              value={task.status}
              onChange={(e) => onStatusChange(task.id, e.target.value)}
              className="bg-gray-700 text-xs text-gray-200 rounded-md px-2 py-1 border border-gray-600"
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <button
              onClick={() => onDelete(task.id)}
              className="text-red-400 hover:text-red-600 text-sm mt-1"
              aria-label="Delete task"
            >
              ✖
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {task.tags.map((t) => (
            <TagBadge key={t} tag={t} onRemove={(tag) => onRemoveTag(task.id, tag)} />
          ))}
        </div>
      </div>
    </div>
  );
}
