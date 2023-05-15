import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProductDetail } from "./ProductDetail";

describe("ProductDetail", () => {
  it("renders product details correctly", async () => {
    // Mock the necessary dependencies and API calls
    jest.mock("../../services/api", () => ({
      details: jest.fn().mockResolvedValue({
        // mocked detail response
      }),
      descriptions: jest.fn().mockResolvedValue({
        // mocked description response
      }),
    }));

    // Render the component
    render(
      <BrowserRouter>
        <ProductDetail />
      </BrowserRouter>
    );

    // Wait for the API calls to resolve and component to update
    await waitFor(() => {
      // Assert that the product details are rendered correctly
      expect(screen.getByText("Excelente / Bueno / Aceptable")).toBeInTheDocument();
      // Add more assertions based on your component's expected behavior
    });
  });
});