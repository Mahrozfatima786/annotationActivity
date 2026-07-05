
interface TaskCardProps {
  title: string;
  status: string;
  type: string;
}

export default function TaskCard({
  title,
  status,
  type,
}: TaskCardProps) {
  const statusStyles: Record<string, string> = {
    TODO: "bg-gray-100 text-gray-700",
    IN_PROGRESS: "bg-yellow-100 text-yellow-700",
    DONE: "bg-green-100 text-green-700",
    QA: "bg-blue-100 text-blue-700",
    BLOCKED: "bg-red-100 text-red-700",
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            statusStyles[status] ||
            "bg-gray-100 text-gray-700"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="mt-3">
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
          {type}
        </span>
      </div>
    </div>
  );
}