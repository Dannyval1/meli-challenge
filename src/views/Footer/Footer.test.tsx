import React from "react";
import { Footer } from "./Footer";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Pruebas del Footer", () => {
  test("Footer test", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
});