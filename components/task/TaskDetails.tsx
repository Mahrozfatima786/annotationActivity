"use client";

import TaskSummary from "./TaskSummary";


interface Props {
  task: any;
}

export default function TaskDetail({ task }: Props) {
  if (!task) {
    return (
      <div className="border rounded p-4">
        Select a task
      </div>
    );
  }

  return (
    <div className="border rounded p-4">
      <h2 className="text-xl font-bold">
        {task.title}
      </h2>

      <p>Status: {task.status}</p>
      <p>Type: {task.type}</p>
      <p>
        Assignee:
        {task.assignee?.name || "Unassigned"}
      </p>

      <TaskSummary taskId={task.id} />
    </div>
  );
}