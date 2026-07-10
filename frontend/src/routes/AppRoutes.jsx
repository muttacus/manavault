import { BrowserRouter, Route, Routes } from "react-router-dom";

import CardDetails from "../pages/CardDetails";
import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";
import StoreDashboard from "../pages/StoreDashboard";
import StoreLogin from "../pages/StoreLogin";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/login" element={<StoreLogin />} />
        <Route path="/dashboard" element={<StoreDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;