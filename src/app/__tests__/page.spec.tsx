import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("page", () => {
  it("should render hello world", () => {
    const screen = render(<Home />);

    expect(screen.getByText("Homepage")).toBeInTheDocument();
  });
});
