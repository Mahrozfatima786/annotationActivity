import { normalizeTask } from "./normalize";

describe("normalizeTask", () => {
  it("should convert annotationCount", () => {
    const task = normalizeTask({
      id: "t1",
      title: "Task 1",
      type: "image",
      status: "done",
      assignee: null,
      annotationCount: "5",
      updatedAt: Date.now(),
      meta: {},
    } as any);

    expect(task.annotationCount).toBe(5);
  });
});