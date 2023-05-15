import React from "react";
import { Header } from "./Header";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Pruebas del Header", () => {
  test("Header test", () => {
    const navigateMock = jest.fn();
    const reloadMock = jest.fn();

    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const btn_search = getByTestId("btn_search");
    expect(btn_search).toBeInTheDocument();

    const btn_go_home = getByTestId("btn_go_home");
    expect(btn_go_home).toBeInTheDocument();

    const input_query = getByTestId("input_query");
    expect(input_query).toBeInTheDocument();

    fireEvent.click(btn_search);
    fireEvent.click(btn_go_home);
    fireEvent.change(input_query, { target: { value: "perro" } });
    // Simulate user interaction - enter search query and submit
    // fireEvent.change(input_query, { target: { value: "example" } });
    // fireEvent.keyPress(input_query, { key: "Enter", code: 13, charCode: 13 });
    // expect(navigateMock).toHaveBeenCalledWith({
    //   pathname: "/items",
    //   search: "?search=example",
    // });
    // expect(reloadMock).toHaveBeenCalled();
  });
});
