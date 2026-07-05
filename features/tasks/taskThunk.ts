import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks } from "../../services/api";
import { normalizeTask } from "../../services/normalize";
export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async ({
    page,
    pageSize,
  }: {
    page: number;
    pageSize: number;
  }) => {
    const data = await getTasks(
      page,
      pageSize
    );
    return {
      page: data.page,
      pageSize: data.pageSize,
      total: data.total,
      items: data.items.map(normalizeTask),
    };
  }
);