import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/transparency/")({
  head: () => ({
    meta: [
      { title: "Financial Transparency — AG Union" },
      { name: "description", content: "Financial summary and multi-year performance data for AG Union — audited and published for members." },
      { property: "og:title", content: "AG Union Financial Transparency" },
      { property: "og:description", content: "Audited, published, member-accountable." },
    ],
  }),
  component: TransparencyPage,
});

const PL = [
  ["Total Income", "18.4M", "16.2M", "13.8M"],
  ["Interest Income", "14.9M", "13.1M", "11.2M"],
  ["Investment Income", "3.5M", "3.1M", "2.6M"],
  ["Operating Expenses", "(9.8M)", "(8.9M)", "(7.7M)"],
  ["Net Surplus", "8.6M", "7.3M", "6.1M"],
];

const BS = [
  ["Total Assets", "212M", "184M", "156M"],
  ["Member Savings", "60.9M", "54.1M", "46.2M"],
  ["Loan Portfolio", "152M", "128M", "108M"],
  ["Capital & Reserves", "41.6M", "35.8M", "30.4M"],
];

function TransparencyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Transparency"
        title="Audited. Published. Accountable."
        intro="Financial statements are audited annually by an independent firm and presented to the General Assembly. Summaries and full reports are available below."
      />
      <Section>
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["41.6M", "Capital (Birr)"],
            ["60.9M", "Savings (Birr)"],
            ["152M", "Loans Outstanding"],
            ["8.6M", "2025 Net Surplus"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-2xl bg-primary p-6 text-primary-foreground">
              <div className="text-3xl font-extrabold">{v}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest opacity-70">{l}</div>
            </div>
          ))}
        </div>

        <h2 className="mb-6 text-2xl font-bold">3-Year Income Snapshot (Birr)</h2>
        <div className="mb-16 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-card">
              <tr>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">Line Item</th>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">2025</th>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">2024</th>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">2023</th>
              </tr>
            </thead>
            <tbody>
              {PL.map((row) => (
                <tr key={row[0]} className="border-t border-border">
                  <td className="p-4 font-medium">{row[0]}</td>
                  <td className="p-4 font-mono">{row[1]}</td>
                  <td className="p-4 font-mono text-foreground/60">{row[2]}</td>
                  <td className="p-4 font-mono text-foreground/60">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mb-6 text-2xl font-bold">Balance Sheet Snapshot (Birr)</h2>
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-card">
              <tr>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">Item</th>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">2025</th>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">2024</th>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">2023</th>
              </tr>
            </thead>
            <tbody>
              {BS.map((row) => (
                <tr key={row[0]} className="border-t border-border">
                  <td className="p-4 font-medium">{row[0]}</td>
                  <td className="p-4 font-mono">{row[1]}</td>
                  <td className="p-4 font-mono text-foreground/60">{row[2]}</td>
                  <td className="p-4 font-mono text-foreground/60">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section className="bg-card">
        <div className="rounded-3xl bg-primary p-10 text-primary-foreground">
          <h3 className="mb-4 text-2xl font-bold">Independent Audit Statement</h3>
          <p className="mb-6 max-w-3xl text-primary-foreground/70">
            The 2025 financial statements of Abdi Gudina Financial Cooperatives Union Ltd. have been audited in accordance with the cooperative accounting standards of the Federal Democratic Republic of Ethiopia. The audit was completed in Q1 2026 with an unqualified opinion.
          </p>
          <Link to="/transparency/reports" className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground">
            Download Annual Reports →
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
