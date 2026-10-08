type AnalysisResultProps = {
  category: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  impact: string;
  priority: "low" | "medium" | "high";
  confidence: number;
};

export default function AnalysisResult({
  category,
  title,
  description,
  location,
  duration,
  impact,
  priority,
  confidence,
}: AnalysisResultProps) {
  const priorityStyles = {
    low: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-red-100 text-red-700",
  };

  return (
    <section className="mx-auto max-w-3xl px-6 pb-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              AI Analysis
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {title}
            </h2>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold capitalize ${priorityStyles[priority]}`}
          >
            {priority} priority
          </span>
        </div>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <InfoCard label="Category" value={category} />
          <InfoCard label="Location" value={location} />
          <InfoCard label="Duration" value={duration} />
          <InfoCard label="Impact" value={impact} />
        </div>

        <div className="mt-6 rounded-xl bg-slate-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">
              AI Confidence
            </span>

            <span className="font-bold text-slate-900">
              {Math.round(confidence * 100)}%
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600"
              style={{ width: `${confidence * 100}%` }}
            />
          </div>
        </div>

        <button className="mt-6 w-full rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white hover:bg-slate-800">
          Confirm & Submit Report
        </button>
      </div>
    </section>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-medium text-slate-900">
        {value}
      </p>
    </div>
  );
}