import { RawTask, Task, TaskStatus, TaskType } from "../types/task";

// Normalize Task Type
function normalizeTaskType(type: string): TaskType {
  switch (type.toLowerCase()) {
    case "image":
      return "image";

    case "audio":
      return "audio";

    case "text":
      return "text";

    default:
      return "unknown";
  }
}

// Normalize Status
function normalizeStatus(status: string): TaskStatus {
  const value = status.toLowerCase();

  switch (value) {
    case "todo":
      return "TODO";

    case "inprogress":
    case "in_progress":
      return "IN_PROGRESS";

    case "done":
      return "DONE";

    case "qa":
      return "QA";

    case "blocked":
      return "BLOCKED";

    default:
      return "TODO";
  }
}

// Normalize Updated Time
function normalizeUpdatedAt(updatedAt: string | number): number {
  if (typeof updatedAt === "number") {
    return updatedAt;
  }

  return new Date(updatedAt).getTime();
}

// Normalize Annotation Count
function normalizeAnnotationCount(count: number | string): number {
  return Number(count);
}

// Main Function
export function normalizeTask(raw: RawTask): Task {
  return {
    id: raw.id,

    title: raw.title,

    type: normalizeTaskType(raw.type),

    status: normalizeStatus(raw.status),

    assignee: raw.assignee,

    annotationCount: normalizeAnnotationCount(raw.annotationCount),

    updatedAt: normalizeUpdatedAt(raw.updatedAt),

    meta: raw.meta ?? {},
  };
}