"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";

interface TaskSummaryProps {
  taskId: string;
}

export default function TaskSummary({
  taskId,
}: TaskSummaryProps) {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!taskId) return;

    const controller = new AbortController();

    setSummary("");
    setError("");
    setLoading(true);

    const loadSummary = async () => {
      try {
       const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:4000/api";

const response = await fetch(
  `${API_URL}/tasks/${taskId}/summary`,
  {
    signal: controller.signal,
  }
        if (!response.body) {
          throw new Error("No stream found");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } =
            await reader.read();

          if (done) break;

          const chunk =
            decoder.decode(value);

          const lines =
            chunk.split("\n");

          lines.forEach((line) => {
            if (
              line.startsWith("data: ")
            ) {
              try {
                const text =
                  JSON.parse(
                    line.replace(
                      "data: ",
                      ""
                    )
                  );

                setSummary(
                  (prev) => prev + text
                );
              } catch {}
            }
          });
        }
      } catch (err) {
        if (
          err instanceof Error &&
          err.name !== "AbortError"
        ) {
          setError(
            "Failed to load summary"
          );
        }
      } finally {
        setLoading(false);
      }
    };

    loadSummary();

    return () => {
      controller.abort();
    };
  }, [taskId]);

  if (loading && !summary) {
    return (
      <div className="mt-4">
        Loading summary...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-4 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-4 border-t pt-4">
      <h3 className="font-semibold mb-2">
        AI Summary
      </h3>

      <div className="prose max-w-none">
        <ReactMarkdown
          rehypePlugins={[
            rehypeSanitize,
          ]}
        >
          {summary}
        </ReactMarkdown>
      </div>
    </div>
  );
}
