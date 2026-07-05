"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchTasks } from "../../features/tasks/taskThunk";
import {
  setCurrentPage,
} from "../../features/tasks/taskSlice";
export default function Pagination() {
  const dispatch = useAppDispatch();

  const {
    currentPage,
    pageSize,
    total,
  } = useAppSelector(
    (state: any) => state.tasks
  );

  const totalPages = Math.ceil(
    total / pageSize
  );

  useEffect(() => {
    dispatch(
      fetchTasks({
        page: currentPage,
        pageSize,
      })
    );
  }, [dispatch, currentPage, pageSize]);

  return (
    <div className="mt-6 flex gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() =>
          dispatch(
            setCurrentPage(
              currentPage - 1
            )
          )
        }
      >
        Prev
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          dispatch(
            setCurrentPage(
              currentPage + 1
            )
          )
        }
      >
        Next
      </button>
    </div>
  );
}