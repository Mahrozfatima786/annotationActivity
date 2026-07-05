import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskAdapter } from "./taskAdapter";
import { fetchTasks } from "./taskThunk";

export const taskSlice = createSlice({
  name: "tasks",

  initialState: taskAdapter.getInitialState({
    loading: false,
    error: null as string | null,

    selectedTaskId: null as string | null,

    search: "",
    statusFilter: "ALL",
    typeFilter: "ALL",

    sortBy: "updatedAt-desc",

    currentPage: 1,
    pageSize: 20,
    total: 0,
  }),

  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    setError(
      state,
      action: PayloadAction<string | null>
    ) {
      state.error = action.payload;
    },

    setSelectedTask(
      state,
      action: PayloadAction<string | null>
    ) {
      state.selectedTaskId = action.payload;
    },

    setSearch(
      state,
      action: PayloadAction<string>
    ) {
      state.search = action.payload;
    },

    setStatusFilter(
      state,
      action: PayloadAction<string>
    ) {
      state.statusFilter = action.payload;
    },

    setTypeFilter(
      state,
      action: PayloadAction<string>
    ) {
      state.typeFilter = action.payload;
    },

    setSortBy(
      state,
      action: PayloadAction<string>
    ) {
      state.sortBy = action.payload;
    },

    setCurrentPage(
      state,
      action: PayloadAction<number>
    ) {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        fetchTasks.fulfilled,
        (state, action) => {
          state.loading = false;

          taskAdapter.setAll(
            state,
            action.payload.items
          );

          state.currentPage =
            action.payload.page;

          state.pageSize =
            action.payload.pageSize;

          state.total =
            action.payload.total;
        }
      )

      .addCase(
        fetchTasks.rejected,
        (state, action) => {
          state.loading = false;

          state.error =
            action.error.message ||
            "Failed to fetch tasks";
        }
      );
  },
});

export const {
  setLoading,
  setError,
  setSelectedTask,
  setSearch,
  setStatusFilter,
  setTypeFilter,
  setSortBy,
  setCurrentPage,
} = taskSlice.actions;

export default taskSlice.reducer;