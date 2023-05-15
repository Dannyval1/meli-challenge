import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "../views/Index/Index";
import Main from "../views/Main";
import { ProductDetail } from "../views/ProductDetail/ProductDetail";
import { QueryResult } from "../views/QueryResult/QueryResult";

export default function Router() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/items" element={<QueryResult />} />
          <Route path="/items/:id" element={<ProductDetail />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}
