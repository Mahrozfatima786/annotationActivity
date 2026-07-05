// "use client";

// import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import {
//   setSearch,
//   setStatusFilter,
//   setTypeFilter,
// } from "../../features/tasks/taskSlice";

// export default function TaskFilters() {
//   const dispatch = useAppDispatch();

//   const {
//     search,
//     statusFilter,
//     typeFilter,
//   } = useAppSelector((state) => state.tasks);

//   return (
//     <div className="mb-6 flex flex-wrap gap-4">
//       <input
//         type="text"
//         placeholder="Search task..."
//         value={search}
//         onChange={(e) =>
//           dispatch(setSearch(e.target.value))
//         }
//         className="rounded border px-3 py-2"
//       />

//       <select
//         value={statusFilter}
//         onChange={(e) =>
//           dispatch(
//             setStatusFilter(e.target.value)
//           )
//         }
//         className="rounded border px-3 py-2"
//       >
//         <option value="ALL">All Status</option>
//         <option value="TODO">TODO</option>
//         <option value="IN_PROGRESS">
//           IN_PROGRESS
//         </option>
//         <option value="DONE">DONE</option>
//         <option value="QA">QA</option>
//         <option value="BLOCKED">BLOCKED</option>
//       </select>

//       <select
//         value={typeFilter}
//         onChange={(e) =>
//           dispatch(setTypeFilter(e.target.value))
//         }
//         className="rounded border px-3 py-2"
//       >
//         <option value="ALL">All Types</option>
//         <option value="IMAGE">IMAGE</option>
//         <option value="TEXT">TEXT</option>
//         <option value="AUDIO">AUDIO</option>
//         <option value="UNKNOWN">UNKNOWN</option>
//       </select>
//       <select
//   value={sortBy}
//   onChange={(e) =>
//     dispatch(setSortBy(e.target.value))
//   }
// >
//   <option value="updatedAt-desc">
//     Newest First
//   </option>

//   <option value="updatedAt-asc">
//     Oldest First
//   </option>

//   <option value="title-asc">
//     Title A-Z
//   </option>

//   <option value="title-desc">
//     Title Z-A
//   </option>
// </select>
//     </div>
//   );
// }
"use client";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import {
  setSearch,
  setStatusFilter,
  setTypeFilter,
  setSortBy,
} from "../../features/tasks/taskSlice";

export default function TaskFilters() {
  const dispatch = useAppDispatch();

  const {
    search,
    statusFilter,
    typeFilter,
    sortBy,
  } = useAppSelector(
    (state: any) => state.tasks
  );

  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Search task..."
        value={search}
        onChange={(e) =>
          dispatch(setSearch(e.target.value))
        }
        className="rounded border px-3 py-2"
      />

      <select
        value={statusFilter}
        onChange={(e) =>
          dispatch(
            setStatusFilter(e.target.value)
          )
        }
        className="rounded border px-3 py-2"
      >
        <option value="ALL">
          All Status
        </option>
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">
          IN_PROGRESS
        </option>
        <option value="DONE">DONE</option>
        <option value="QA">QA</option>
        <option value="BLOCKED">
          BLOCKED
        </option>
      </select>

      <select
        value={typeFilter}
        onChange={(e) =>
          dispatch(
            setTypeFilter(e.target.value)
          )
        }
        className="rounded border px-3 py-2"
      >
        <option value="ALL">
          All Types
        </option>
        <option value="IMAGE">
          IMAGE
        </option>
        <option value="TEXT">
          TEXT
        </option>
        <option value="AUDIO">
          AUDIO
        </option>
        <option value="UNKNOWN">
          UNKNOWN
        </option>
      </select>

      <select
        value={sortBy}
        onChange={(e) =>
          dispatch(setSortBy(e.target.value))
        }
        className="rounded border px-3 py-2"
      >
        <option value="updatedAt-desc">
          Newest First
        </option>

        <option value="updatedAt-asc">
          Oldest First
        </option>

        <option value="title-asc">
          Title A-Z
        </option>

        <option value="title-desc">
          Title Z-A
        </option>
      </select>
    </div>
  );
}