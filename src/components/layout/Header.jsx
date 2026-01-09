import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);
  const [mobileLoanOpen, setMobileLoanOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const loanItems = {
    homeLoans: [
      { label: "Best Home Loan Rates", href: "../loans/home-loan" },
      { label: "Loan Against Property", href: "../loans/loan-against-property" },
      { label: "NRI Home Loans India", href: "../loans/nri-home-loans" },
      { label: "Top Up Home Loans", href: "../loans/top-up-home-loan" },
      { label: "Home Loan Without ITR", href: "../loans/home-loan-without-itr" },
      { label: "Self Employed Home Loans", href: "../loans/home-loans-for-self-employed" },
      { label: "Salaried Home Loans", href: "../loans/home-loans-for-salaried" },
      { label: "Home Loan EMI Calculator", href: "../calculators/home-loan-emi-calculator" },
      { label: "Home Loan Balance Transfer", href: "../loans/home-loan-balance-transfer" }
    ],
    otherLoans: [
      { label: "Personal Loan", href: "../loans/personal-loan" },
      { label: "Business Loan", href: "../loans/business-loan" }
    ],
    tools: [
      { label: "EMI Calculator", href: "../calculators/home-loan-emi-calculator" },
      { label: "Buy vs Rent", href: "../calculators/buying-vs-renting-calculator" },
      { label: "Compare Rates", href: "../interest-rates" }
    ],
    byBank: [
      { label: "Balance Transfer", href: "../loans/home-loan-balance-transfer" },
      { label: "Interest Rates", href: "../interest-rates" },
      { label: "EMI Calculators", href: "../calculators/home-loan-emi-calculator" }
    ],
    popularBanks: [
      { label: "SBI", href: "../interest-rates/sbi" },
      { label: "HDFC", href: "../interest-rates/hdfc" },
      { label: "ICICI", href: "../interest-rates/icici" },
      { label: "Axis", href: "../interest-rates/axis" },
      { label: "Kotak", href: "../interest-rates/kotak" },
      { label: "PNB", href: "../interest-rates/pnb" }
    ]
  };

  const navItems = [
    { label: "Credit Score", href: "../Credit-score" },
    { label: "Loans", href: "#", dropdown: true },
    { label: "Credit Cards", href: "../Credit-cards" },
    { label: "Digital Gold", href: "./Digital-gold" },
    { label: "Blog", href: "../blog" },
    { label: "About", href: "../about" },
    { label: "Partner Program", href: "../partner-program" },
  ];

  const isActive = (href) => {
    const cleanHref = href.replace(/^\.\.\//, '').replace(/^\.\//, '');
    const cleanPathname = location.pathname.replace(/^\//, '');
    
    if (href === "." && location.pathname === "/") return true;
    if (cleanPathname === cleanHref) return true;
    if (cleanPathname.startsWith(cleanHref)) return true;
    
    return false;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLoanOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Render Loans Dropdown Content - Used in both desktop and mobile
  const renderLoansDropdownContent = (isMobile = false) => (
    <div className={`${isMobile ? 'p-4' : 'p-6'} bg-white rounded-xl shadow-2xl border border-gray-100`}>
      <div className={`${isMobile ? 'space-y-6' : 'grid grid-cols-3 gap-6'}`}>
        {/* HOME LOANS */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-2xl">🏠</span>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Home Loans</h3>
          </div>
          <ul className="space-y-2">
            {loanItems.homeLoans.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className={`block rounded-md px-3 py-2 hover:bg-gray-50 hover:text-primary transition relative ${
                    isActive(item.href) 
                      ? "bg-gray-50 text-primary after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-primary after:rounded-full" 
                      : ""
                  }`}
                  onClick={() => {
                    if (isMobile) {
                      setOpen(false);
                      setMobileLoanOpen(false);
                    } else {
                      setLoanOpen(false);
                    }
                  }}
                >
                  • {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* OTHER LOANS + TOOLS */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-2xl">💰</span>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Other Loans</h3>
          </div>
          <ul className="space-y-2 mb-6">
            {loanItems.otherLoans.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className={`block rounded-md px-3 py-2 hover:bg-gray-50 hover:text-primary transition relative ${
                    isActive(item.href) 
                      ? "bg-gray-50 text-primary after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-primary after:rounded-full" 
                      : ""
                  }`}
                  onClick={() => {
                    if (isMobile) {
                      setOpen(false);
                      setMobileLoanOpen(false);
                    } else {
                      setLoanOpen(false);
                    }
                  }}
                >
                  • {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mb-4 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Tools</h3>
          </div>
          <ul className="space-y-2">
            {loanItems.tools.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className={`block rounded-md px-3 py-2 hover:bg-gray-50 hover:text-primary transition relative ${
                    isActive(item.href) 
                      ? "bg-gray-50 text-primary after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-primary after:rounded-full" 
                      : ""
                  }`}
                  onClick={() => {
                    if (isMobile) {
                      setOpen(false);
                      setMobileLoanOpen(false);
                    } else {
                      setLoanOpen(false);
                    }
                  }}
                >
                  • {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* BY BANK SECTION */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-2xl">🏦</span>
            <h3 className="text-sm font-semibold uppercase tracking-wider">By Bank</h3>
          </div>

          <input
            type="text"
            placeholder="Search Bank"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-1 focus:ring-primary"
          />

          <div className="space-y-3 mb-6">
            {loanItems.byBank.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between rounded-md bg-gray-50 px-3 py-2 hover:bg-gray-100 transition relative ${
                  isActive(item.href) 
                    ? "bg-gray-100 text-primary after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-primary after:rounded-full" 
                    : ""
                }`}
                onClick={() => {
                  if (isMobile) {
                    setOpen(false);
                    setMobileLoanOpen(false);
                  } else {
                    setLoanOpen(false);
                  }
                }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xs">💱</span>
                  {item.label}
                </span>
                <span>›</span>
              </a>
            ))}
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-gray-500 mb-2">
              Popular Banks:
            </p>
            <div className="grid grid-cols-2 gap-1 text-sm">
              {loanItems.popularBanks.map((bank) => (
                <a
                  key={bank.href}
                  href={bank.href}
                  className={`block rounded px-2 py-1 text-center hover:bg-gray-50 hover:text-primary transition relative ${
                    isActive(bank.href) 
                      ? "bg-gray-50 text-primary after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-0.5 after:bg-primary after:rounded-full" 
                      : ""
                  }`}
                  onClick={() => {
                    if (isMobile) {
                      setOpen(false);
                      setMobileLoanOpen(false);
                    } else {
                      setLoanOpen(false);
                    }
                  }}
                >
                  {bank.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* HEADER BAR */}
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-md border-gray-100"
            : "bg-white border-gray-100"
        }`}
      >
        <div className="relative flex items-center h-20 px-4 md:px-10">
          {/* LOGO */}
          <motion.a
            href=".."
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0"
          >
            <img
              src="../public/Rupy.Money.png"
              alt="Credifyy"
              className="h-7 w-auto md:h-8"
            />
          </motion.a>

          {/* DESKTOP NAVIGATION */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-8 text-sm text-gray-600">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setLoanOpen(true)}
                    onMouseLeave={() => setLoanOpen(false)}
                  >
                    <button className={`hover:text-primary transition flex items-center gap-1 whitespace-nowrap relative ${
                      location.pathname.includes("loans") || 
                      location.pathname.includes("calculators") ||
                      location.pathname.includes("interest-rates") 
                        ? "text-primary font-semibold after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-primary after:rounded-full" 
                        : ""
                    }`}>
                      {item.label} <span className="text-xs">▼</span>
                    </button>

                    <AnimatePresence>
                      {loanOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-10 w-[800px] z-50"
                        >
                          {renderLoansDropdownContent(false)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a 
                  key={item.label}
                  href={item.href} 
                  className={`hover:text-primary transition whitespace-nowrap relative ${
                    isActive(item.href) 
                      ? "text-primary font-semibold after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-primary after:rounded-full" 
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* APPLY NOW BUTTON - DESKTOP */}
          <div className="ml-auto hidden lg:flex items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://pulse.Credifyy.com/users/sign-up/"
              className="bg-white text-black border-2 border-black px-6 py-3 rounded-full font-semibold whitespace-nowrap hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300"
            >
              Apply Now
            </motion.a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto lg:hidden text-gray-700 text-2xl p-2"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-gray-100 fixed top-20 left-0 right-0 bottom-0 overflow-y-auto z-40"
          >
            <div className="px-6 py-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileLoanOpen(!mobileLoanOpen)}
                        className={`flex justify-between items-center w-full font-medium py-4 text-left relative ${
                          location.pathname.includes("loans") || 
                          location.pathname.includes("calculators") ||
                          location.pathname.includes("interest-rates")
                            ? "text-primary font-semibold hover:text-primary-dark after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-primary after:rounded-full" 
                            : "text-gray-700 hover:text-primary"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className={`transform transition-transform ${mobileLoanOpen ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      
                      <AnimatePresence>
                        {mobileLoanOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            {renderLoansDropdownContent(true)}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className={`block rounded-md px-3 py-4 font-medium hover:text-primary transition relative ${
                        isActive(item.href) 
                          ? "text-primary font-semibold after:absolute after:left-3 after:right-3 after:-bottom-2 after:h-0.5 after:bg-primary after:rounded-full" 
                          : "text-gray-700"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}

              {/* MOBILE APPLY NOW BUTTON */}
              <div className="mt-8">
                <a
                  href="https://pulse.Credifyy.com/users/sign-up/"
                  className="block text-center bg-white text-black border-2 border-black py-3 rounded-full font-semibold hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}