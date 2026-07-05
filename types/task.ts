// Raw API Response (Messy Data)
export interface RawTask {
  id: string;
  title: string;
  type: string;
  status: string;
  assignee: {
    id: string;
    name: string;
  } | null;
  annotationCount: number | string;
  updatedAt: string | number;
  meta?: Record<string, unknown>;
}

// Clean Task Types
export type TaskType = "image" | "audio" | "text" | "unknown";

export type TaskStatus =
  | "TODO"
  | "IN_PROGRESS"
  | "DONE"
  | "QA"
  | "BLOCKED";

// Clean Task Model
export interface Task {
  id: string;
  title: string;
  type: TaskType;
  status: TaskStatus;
  assignee: {
    id: string;
    name: string;
  } | null;
  annotationCount: number;
  updatedAt: number;
  meta: Record<string, unknown>;
}