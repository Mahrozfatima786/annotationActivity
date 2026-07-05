"use client";

import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";

import {
  updateTaskFromSocket,
  assignTaskFromSocket,
  annotationCreated,
} from "../features/tasks/taskSlice";

export default function useTaskFeed() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let ws: WebSocket;

    const connect = () => {
    //   ws = new WebSocket("ws://localhost:4000/ws");
ws = new WebSocket(
  process.env.NEXT_PUBLIC_WS_URL ||
    "ws://localhost:4000/ws"
);
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        switch (data.kind) {
          case "task.updated":
            dispatch(updateTaskFromSocket(data.payload));
            break;

          case "task.assigned":
            dispatch(assignTaskFromSocket(data.payload));
            break;

          case "annotation.created":
            dispatch(annotationCreated(data.payload));
            break;
        }
      };

      ws.onclose = () => {
        setTimeout(connect, 3000);
      };
    };

    connect();

    return () => ws?.close();
  }, [dispatch]);
}