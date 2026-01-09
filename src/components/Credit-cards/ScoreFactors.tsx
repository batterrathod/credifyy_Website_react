type Factor = {
  label: string;
  percent: number;
  barColor: string;
};

const factors: Factor[] = [
  { label: "Payment History", percent: 35, barColor: "bg-green-500" },
  { label: "Credit Utilization", percent: 30, barColor: "bg-blue-500" },
  { label: "Credit History Length", percent: 15, barColor: "bg-purple-500" },
  { label: "Credit Mix", percent: 10, barColor: "bg-orange-500" },
  { label: "New Credit", percent: 10, barColor: "bg-pink-500" },
];

export default function ScoreFactors() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-600">
            📄 Score Factors
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
            What Impacts Your{" "}
            <span className="text-orange-500">Equifax Score?</span>
          </h2>

          <p className="mt-3 max-w-xl text-slate-600">
            Understanding these key factors helps you take control of your
            Credit health
          </p>

          {/* Progress Bars */}
          <div className="mt-10 space-y-6">
            {factors.map((item, index) => (
              <div key={index}>
                <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
                  <span>{item.label}</span>
                  <span>{item.percent}%</span>
                </div>

                <div className="h-3 w-full rounded-full bg-slate-200">
                  <div
                    className={`h-3 rounded-full ${item.barColor}`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Pro Tip */}
          <div className="mt-10 rounded-xl bg-slate-50 px-6 py-4 text-sm text-slate-600">
            <span className="font-semibold text-orange-500">Pro Tip:</span>{" "}
            Focus on payment history and Credit utilization – they account for
            <span className="font-semibold"> 65% </span>
            of your Equifax score.
          </div>
        </div>

        {/* RIGHT SIMULATOR CARD */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-indigo-50 p-8 shadow-sm">
            {/* Grade */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-xl font-extrabold text-white">
              A+
            </div>

            <h3 className="mt-5 text-center text-lg font-bold text-slate-900">
              Score Simulator
            </h3>

            <p className="mt-1 text-center text-sm text-slate-600">
              See how actions affect your score
            </p>

            {/* Actions */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 text-sm shadow-sm">
                <span>Pay all bills on time</span>
                <span className="font-semibold text-green-600">+40 pts</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 text-sm shadow-sm">
                <span>Reduce Credit card usage</span>
                <span className="font-semibold text-green-600">+30 pts</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 text-sm shadow-sm">
                <span>Dispute errors in report</span>
                <span className="font-semibold text-green-600">+25 pts</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 text-sm shadow-sm">
                <span>Multiple Credit inquiries</span>
                <span className="font-semibold text-red-500">-20 pts</span>
              </div>
            </div>

            <button className="mt-8 w-full text-center text-sm font-semibold text-orange-500 hover:underline">
              Try full simulator →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
