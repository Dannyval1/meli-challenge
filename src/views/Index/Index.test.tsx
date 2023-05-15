import React from "react";
import { Index } from "./Index";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Pruebas del Index", () => {
  test("Index test", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );
  });
});