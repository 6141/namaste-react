import { screen } from "@testing-library/react";
import { Header } from "../components/Header";
import "@testing-library/jest-dom";

describe("header component", () => {
  it("should render the header component", () => {
    render(
      <Provider>
        <Header />
      </Provider>
    );

    const login = screen.getByRole("button");
    expect(login).toBeInTheDocument();
  });
});
