"use client";

import MainLayout from "../components/layout/MainLayout";
import TaskList from "../components/task/taskList";
import TaskFilters from "../components/task/TaskFilters";
import Pagination from "../components/task/Pagination";
import TaskDetail from "../components/task/TaskDetails";

import { useAppSelector } from "../store/hooks";
import type { RootState } from "../store/stores";
import useTaskFeed from "hooks/TaskFeed";


export default function Home() {
  useTaskFeed();

  const { selectedTaskId, entities } =
    useAppSelector(
      (state: RootState) => state.tasks
    );

  const selectedTask =
    selectedTaskId &&
    entities[selectedTaskId]
      ? entities[selectedTaskId]
      : null;

  return (
    <MainLayout>
      <h1 className="mb-6 text-3xl font-bold">
        Task Activity Dashboard
      </h1>

      <TaskFilters />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskList />

        <TaskDetail
          task={selectedTask}
        />
      </div>

      <Pagination />
    </MainLayout>
  );
}