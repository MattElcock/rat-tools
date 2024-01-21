import React from "react";
import { AvatarLink } from ".";
import { render } from "@testing-library/react";

describe("<AvatarLink />", () => {
  it("should render a link", () => {
    const screen = render(
      <AvatarLink
        text="foo"
        href="https://example.com"
        icon={<React.Fragment />}
      />
    );

    expect(screen.getByRole("link", { name: "foo" })).toHaveAttribute(
      "href",
      "https://example.com"
    );
  });
});
