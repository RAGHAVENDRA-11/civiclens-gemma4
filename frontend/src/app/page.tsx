"use client";

import { useState } from "react";

type Result = {
  category: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  impact: string;
  priority: string;
  confidence: number;
};

export default function Home() {
  const [issue, setIssue] = useState(
    "There is a huge pothole near the bus stand. Bikes are struggling to pass and it has been there for two weeks."
  );
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function analyzeIssue() {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        "http://127.0.0.1:8001/api/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: issue }),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setResult(data);
    } catch {
      setError(
        "Unable to analyze the issue. Please make sure the FastAPI backend is running on port 8001."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-700">
          CivicLens
        </h1>

        <p className="mt-2 text-lg text-slate-600">
          AI-Powered Civic Issue Understanding using Gemma 4
        </p>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <label className="font-semibold text-slate-700">
            Civic Issue
          </label>

          <textarea
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            rows={6}
            className="mt-3 w-full rounded-lg border border-slate-300 p-4 text-slate-900"
          />

          <button
            onClick={analyzeIssue}
            disabled={loading}
            className="mt-4 w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white disabled:opacity-60"
          >
            {loading ? "Analyzing with Gemma 4..." : "Analyze Issue"}
          </button>

          {error && (
            <div className="mt-4 rounded-lg bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}
        </div>

        {result && (
          <div className="mt-8 rounded-xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold text-slate-900">
              Gemma 4 Analysis
            </h2>

            <div className="mt-6 space-y-4">
              <ResultRow label="Category" value={result.category} />
              <ResultRow label="Title" value={result.title} />
              <ResultRow
                label="Description"
                value={result.description}
              />
              <ResultRow label="Location" value={result.location} />
              <ResultRow label="Duration" value={result.duration} />
              <ResultRow label="Impact" value={result.impact} />
              <ResultRow label="Priority" value={result.priority} />
              <ResultRow
                label="Confidence"
                value={`${Math.round(result.confidence * 100)}%`}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function ResultRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <p className="text-sm font-semibold text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-slate-900">{value}</p>
    </div>
  );
}