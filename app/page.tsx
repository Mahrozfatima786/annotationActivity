import MainLayout from "../components/layout/MainLayout";
import TaskList from "../components/task/taskList";
import TaskFilters from "../components/task/TaskFilters";
import Pagination from "components/task/Pagination";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="mb-6 text-3xl font-bold">
        Task Activity Dashboard
      </h1>

      <TaskFilters />

      <TaskList />
      <Pagination />
    </MainLayout>
  );
}
// import MainLayout from "../components/layout/MainLayout";
// import TaskList from "../components/task/taskList";

// export default function Home() {
//   return (
//     <MainLayout>
//       <h1 className="mb-6 text-3xl font-bold">
//         Task Activity Dashboard
//       </h1>

//       <TaskList />
//     </MainLayout>
//   );
// }