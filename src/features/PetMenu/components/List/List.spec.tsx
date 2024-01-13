import { render } from "@testing-library/react";
import { List } from "./List";

jest.mock("next/navigation", () => ({
  usePathname: () => "example.org/user-1",
}));

describe("<List />", () => {
  it("should always allow users to add a pet", () => {
    const screen = render(<List pets={[]} />);

    expect(
      screen.getByRole("link", { name: /Add a Rat/i })
    ).toBeInTheDocument();
  });

  it("should display links for the given pets", () => {
    const screen = render(<List pets={[{ id: "pet-1", name: "Apollo" }]} />);

    expect(screen.getByRole("link", { name: /Apollo/i })).toHaveAttribute(
      "href",
      "example.org/user-1/pet-1"
    );
  });
});
