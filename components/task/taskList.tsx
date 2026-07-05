// "use client"
// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import { selectFilteredTasks } from "../../features/tasks/taskSelectors";
// import TaskCard from "./TaskCard";
// import { fetchTasks } from "features/tasks/taskThunk";
// export default function TaskList() {
//   const dispatch = useAppDispatch();
// const tasks = useAppSelector(
//   selectFilteredTasks
// );
//   useEffect(() => {
//    dispatch(
//   fetchTasks({
//     page: 1,
//     pageSize: 20,
//   })
// );
//   }, [dispatch]);
//   return (
//     <div className="mt-6 space-y-4">
//       {tasks.map((task) => (
//         <TaskCard
//           key={task.id}
//           title={task.title}
//           status={task.status}
//           type={task.type}
//         />
//       ))}
//     </div>
//   );
// }
"use client";

import { useEffect } from "react";

import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks";

import {
  selectFilteredTasks,
} from "../../features/tasks/taskSelectors";

import {
  fetchTasks,
} from "../../features/tasks/taskThunk";

import {
  setSelectedTask,
} from "../../features/tasks/taskSlice";

import TaskCard from "./TaskCard";

export default function TaskList() {
  const dispatch =
    useAppDispatch();

  const tasks =
    useAppSelector(
      selectFilteredTasks
    );

  useEffect(() => {
    dispatch(
      fetchTasks({
        page: 1,
        pageSize: 20,
      })
    );
  }, [dispatch]);

  return (
    <div className="space-y-4">
{tasks.map((task) => (
  <div
    key={task.id}
    onClick={() =>
      dispatch(setSelectedTask(task.id))
    }
    className="cursor-pointer"
  >
    <TaskCard
      title={task.title}
      status={task.status}
      type={task.type}
    />
  </div>
))}
    </div>
  );
}