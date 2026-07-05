import { createSelector } from "@reduxjs/toolkit";
import { taskAdapter } from "./taskAdapter";
import { RootState } from "../../store/stores";
const selectors = taskAdapter.getSelectors(
  (state: RootState) => state.tasks
);
export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
} = selectors;
export const selectFilteredTasks = createSelector(
  [
    selectAllTasks,
    (state: RootState) => state.tasks.search,
    (state: RootState) => state.tasks.statusFilter,
    (state: RootState) => state.tasks.typeFilter,
    (state: RootState) => state.tasks.sortBy,
  ],
  (
    tasks,
    search,
    statusFilter,
    typeFilter,
    sortBy
  ) => {
    const filteredTasks = tasks.filter(
      (task) => {
        const matchesSearch =
          task.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchesStatus =
          statusFilter === "ALL" ||
          task.status === statusFilter;
        const matchesType =
          typeFilter === "ALL" ||
          task.type.toUpperCase() === typeFilter;
        return (
          matchesSearch &&
          matchesStatus &&
          matchesType
        );
      }
    );

    const sortedTasks = [...filteredTasks];

    switch (sortBy) {
      case "updatedAt-desc":
        sortedTasks.sort(
          (a, b) =>
            b.updatedAt - a.updatedAt
        );
        break;

      case "updatedAt-asc":
        sortedTasks.sort(
          (a, b) =>
            a.updatedAt - b.updatedAt
        );
        break;

      case "title-asc":
        sortedTasks.sort((a, b) =>
          a.title.localeCompare(
            b.title
          )
        );
        break;

      case "title-desc":
        sortedTasks.sort((a, b) =>
          b.title.localeCompare(
            a.title
          )
        );
        break;

      default:
        break;
    }

    return sortedTasks;
  }
);