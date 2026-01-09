import { useState } from "react";

/* ================= Chevron ================= */
function Chevron({ open }) {
  return (
    <svg
      className={`w-4 h-4 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Footer() {
  const [open, setOpen] = useState(null);
  const toggle = (key) => setOpen(open === key ? null : key);

  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="bg-white text-black border-t pb-24">
        <div className="max-w-7xl mx-auto px-6 py-14">

          {/* ================= TOP DROPDOWN ================= */}
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 font-semibold text-sm">
            {[
              ["loans", "Loans"],
              ["calculators", "Calculators"],
              ["credit", "Credit Score"],
              ["products", "Other Products"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => toggle(key)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                {label}
                <Chevron open={open === key} />
              </button>
            ))}
          </div>

          {/* ================= MEGA DROPDOWN ================= */}
          {open && (
            <div className="mt-6 bg-white border rounded-2xl p-8 shadow-xl">
              {open === "loans" && <LoansMenu />}
              {open === "calculators" && <CalculatorsMenu />}
              {open === "credit" && <CreditMenu />}
              {open === "products" && <ProductsMenu />}
            </div>
          )}

          {/* ================= MAIN FOOTER ================= */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16 text-sm">

            {/* BRAND */}
            <div>
              <img src="/logo.png" alt="Credifyy" className="h-8 mb-4" />
              <p className="text-gray-600 mb-4">
                Compare loans, credit cards & credit scores.
                Smarter financial decisions for India.
              </p>
              <p className="text-gray-600">📧 support@credifyy.com</p>
              <p className="text-gray-600">📞 +91 73307 55533</p>
            </div>

            <FooterCol title="Products">
              <a href="/personal-loan">Personal Loan</a>
              <a href="/business-loan">Business Loan</a>
              <a href="/credit-cards">Credit Cards</a>
              <a href="/digital-gold">Digital Gold</a>
            </FooterCol>

            <FooterCol title="Company">
              <a href="/about">About Us</a>
              <a href="/careers">Careers</a>
              <a href="/partner">Partner Program</a>
              <a href="/blog">Blog</a>
            </FooterCol>

            <FooterCol title="Support & Legal">
              <a href="/faq">FAQs</a>
              <a href="/grievance">Grievance Redressal</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </FooterCol>

          </div>

          {/* ================= COPYRIGHT ================= */}
          <div className="border-t pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500">
            <p>© 2025 Credifyy. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built for India 🇮🇳</p>
          </div>

        </div>
      </footer>

      {/* ================= STICKY CTA ================= */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">

         <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 text-center sm:text-left leading-tight">
  Get Personal Loans up to{" "}
  <span className="font-extrabold text-black">₹2 Lakhs</span>{" "}
  in{" "}
  <span className="font-extrabold text-black">6 minutes</span>
</p>


          <a
            href="/apply"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full sm:w-auto text-center"
          >
            Apply Now
          </a>

        </div>
      </div>
    </>
  );
}

/* ================= MENUS ================= */

function LoansMenu() {
  return (
    <MegaGrid>
      <Column title="Personal Loans">
        <Link text="Instant Personal Loan" />
        <Link text="Salary Loan" />
        <Link text="Medical Emergency Loan" />
        <Link text="Marriage Loan" />
        <Link text="Education Loan" />
      </Column>

      <Column title="Eligibility & Rates">
        <Link text="Eligibility" />
        <Link text="Interest Rates" />
        <Link text="Documents Required" />
        <Link text="Balance Transfer" />
      </Column>

      <Column title="Special Loans">
        <Link text="Loan for Women" />
        <Link text="Loan for Doctors" />
        <Link text="Low Salary Loan" />
      </Column>
    </MegaGrid>
  );
}

function CalculatorsMenu() {
  return (
    <MegaGrid>
      <Column title="EMI Calculators">
        <Link text="Personal Loan EMI Calculator" />
        <Link text="Marriage Loan EMI Calculator" />
        <Link text="Bike Loan EMI Calculator" />
      </Column>

      <Column title="Advanced">
        <Link text="Eligibility Calculator" />
        <Link text="Interest Calculator" />
      </Column>
    </MegaGrid>
  );
}

function CreditMenu() {
  return (
    <MegaGrid>
      <Column title="Credit Score">
        <Link text="Free Credit Score" />
        <Link text="CIBIL Score" />
        <Link text="Credit Report" />
      </Column>

      <Column title="Improve Credit">
        <Link text="Improve Credit Score" />
        <Link text="Credit Tips" />
      </Column>
    </MegaGrid>
  );
}

function ProductsMenu() {
  return (
    <MegaGrid>
      <Column title="Financial Products">
        <Link text="Credit Cards" />
        <Link text="Digital Gold" />
        <Link text="Insurance" />
      </Column>

      <Column title="Resources">
        <Link text="Blog" />
        <Link text="FAQs" />
        <Link text="Contact Us" />
      </Column>
    </MegaGrid>
  );
}

/* ================= UI HELPERS ================= */

function MegaGrid({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-10">{children}</div>;
}

function Column({ title, children }) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Link({ text }) {
  return (
    <a href="#" className="block text-gray-700 hover:text-black hover:underline">
      {text}
    </a>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-gray-700">
        {children.map((child, i) => (
          <li key={i} className="hover:text-black hover:underline">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}

