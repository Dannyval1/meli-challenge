import { render, fireEvent, screen } from "@testing-library/react";
import { QueryResult } from "./QueryResult";
import { BrowserRouter } from "react-router-dom";

test("QueryResult Test", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <QueryResult />
    </BrowserRouter>
  );

  const detailBtn = getByTestId("detail_button");
  fireEvent.click(detailBtn);
});
