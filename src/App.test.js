import { render, screen } from "@testing-library/react";
import { App, helloWorld, sum } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("helloWorld", () => {
  it("return hello world", () => {
    var actual = helloWorld();
    expect(actual).toBe("hello world!");
  });
});

describe("sum", () => {
  it("return value", () => {
    var actual = sum(1, 2);
    expect(actual).toBe(3);
  });
});
