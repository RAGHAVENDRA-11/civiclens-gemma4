"use client";

import { FormEvent, useState } from "react";

export type AnalysisData = {
  category: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  impact: string;
  priority: "low" | "medium" | "high";
  confidence: number;
};

type IssueFormProps = {
  onAnalysisComplete: (result: AnalysisData) => void;
};

export default function IssueForm({
  onAnalysisComplete,
}: IssueFormProps) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (!description.trim()) {
      setError("Please describe the civic issue.");
      return;
    }

    if (description.trim().length < 10) {
      setError("Please provide a little more detail about the issue.");
      return;
    }

    setLoading(true);

    // Temporary mock response.
    // This will be replaced with the FastAPI /api/analyze call.
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const mockResult: AnalysisData = {
      category: "Road Damage",
      title: "Large pothole near bus stand",
      description:
        "A large pothole is affecting traffic near the bus stand and making it difficult for two-wheelers to pass.",
      location: "Bus Stand",
      duration: "2 weeks",
      impact: "Two-wheeler traffic",
      priority: "high",
      confidence: 0.91,
    };

    setLoading(false);
    onAnalysisComplete(mockResult);
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            Report a Civic Issue
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            What is happening?
          </h2>

          <p className="mt-3 text-slate-600">
            Describe the problem naturally. Our AI will understand the issue
            and organize the important details.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="issue"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Issue description
          </label>

          <textarea
            id="issue"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Example: There is a huge pothole near the bus stand. Bikes are struggling to pass and it has been there for two weeks."
            rows={7}
            maxLength={1000}
            disabled={loading}
            className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100"
          />

          <div className="mt-2 flex justify-between text-xs text-slate-500">
            <span>Be specific about the problem and its location.</span>
            <span>{description.length}/1000</span>
          </div>

          {error && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Analyzing issue..." : "Analyze Issue"}
          </button>
        </form>
      </div>
    </section>
  );
}