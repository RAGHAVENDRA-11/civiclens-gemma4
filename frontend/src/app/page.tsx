export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              CivicLens
            </h1>
            <p className="text-xs text-slate-500">
              AI-powered civic action
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
            Report an Issue
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Powered by Gemma 4
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight">
            Make your community
            <span className="text-blue-600"> better, one report at a time.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Describe a civic problem in your own words. CivicLens uses AI to
            understand the issue, identify its priority, and turn it into a
            structured civic report.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Report a Civic Issue
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
              View Reports
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
          <Feature
            title="Describe Naturally"
            description="Tell us about potholes, garbage, streetlights, drainage, or any other civic issue."
          />

          <Feature
            title="AI Understands"
            description="Gemma 4 converts your description into structured civic information."
          />

          <Feature
            title="Take Action"
            description="Track reports from submission through review, progress, and resolution."
          />
        </div>
      </section>
    </main>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-600">
        ✓
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 leading-7 text-slate-600">{description}</p>
    </div>
  );
}