import { RawTask } from "./task";

export interface TasksResponse {
  page: number;
  pageSize: number;
  total: number;
  items: RawTask[];
}