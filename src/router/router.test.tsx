import Router from "./router";
import { render } from "@testing-library/react";

describe("<Routes />", () => {
  it("renders three <Routes /> components", () => {
    render(<Router></Router>);
  });
});