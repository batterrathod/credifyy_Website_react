import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import Creditscore from "./pages/credit-score/page";
import Creditcards from "./pages/Credit-cards/page";
import Digitalgold from "./pages/Digital-gold/page";
import Blog from "./pages/Blog/page";
import BlogDetail from "./pages/BlogDetail/page";
import About from "./pages/About/page";
import Partnerprogram from "./pages/Partner-program/page";

function App() {
return (
<Routes>
{/* HOME */}
<Route path="/" element={<HomePage />} />

{/* OTHER PAGES */}  
  <Route path="/credit-score" element={<Creditscore />} />  
  <Route path="/credit-cards" element={<Creditcards />} />  
  <Route path="/digital-gold" element={<Digitalgold />} />  
  <Route path="/about" element={<About />} />  
  <Route path="/partner-program" element={<Partnerprogram />} />  

  {/* BLOG */}  
  <Route path="/blog" element={<Blog />} />  
  <Route path="/blog/:slug" element={<BlogDetail />} />  
</Routes>

);
}

export default App;