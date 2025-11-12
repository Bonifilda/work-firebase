// components/TaskItem.tsx
"use client";

import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => Promise<void>;
  onToggle: (id: string, completed: boolean) => Promise<void>;
}

export default function TaskItem({ 
  task, 
  onEdit, 
  onDelete, 
  onToggle 
}: TaskItemProps) {

  const handleToggle = () => {
    onToggle(task.id, task.completed);
  };

  const handleDelete = () => {
    if (confirm("Delete this task?")) {
      onDelete(task.id);
    }
  };

  return (
    <div className={`p-4 border rounded mb-3 ${task.completed ? "bg-gray-100" : "bg-white"}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle}
            className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
          />
          <div>
            <h3 className={`font-semibold ${task.completed ? "line-through text-gray-500" : "text-gray-900"}`}>
              {task.title}
            </h3>
            {task.description && (
              <p className="text-sm text-gray-600">{task.description}</p>
            )}
            <span
              className={`inline-block px-2 py-1 text-xs rounded mt-1 ${
                task.priority === "High"
                  ? "bg-red-200 text-red-800"
                  : task.priority === "Medium"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {task.priority || "Low"}
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600 transition"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}