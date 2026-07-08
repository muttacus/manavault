import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";
import CardDetails from "../pages/CardDetails";
import StoreLogin from "../pages/StoreLogin";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/login" element={<StoreLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;