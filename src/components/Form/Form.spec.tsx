import { render } from "@testing-library/react";
import React from "react";
import { Form } from ".";
import { ResolverError, ResolverResult } from "react-hook-form";
import userEvent from "@testing-library/user-event";

describe("<Form />", () => {
  it("should expose useFormReturn methods to the arguments of a child function", () => {
    const childFunction = jest.fn().mockReturnValue(<React.Fragment />);

    render(
      <Form onSubmit={jest.fn()} resolver={jest.fn()}>
        {childFunction}
      </Form>
    );

    expect(childFunction).toHaveBeenCalledWith(
      expect.objectContaining({
        register: expect.any(Function),
      })
    );
  });

  it("should not call the given onSubmit if the form validation fails", async () => {
    const resolverError: ResolverError<{ foo: string }> = {
      values: {},
      errors: { foo: { type: "required", message: "Required" } },
    };
    const mockResolver = jest.fn().mockReturnValue(resolverError);
    const mockOnSubmit = jest.fn();

    const screen = render(
      <Form onSubmit={mockOnSubmit} resolver={mockResolver}>
        {() => {
          return (
            <>
              <button type="submit">Submit</button>
            </>
          );
        }}
      </Form>
    );

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(mockResolver).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledTimes(0);
  });

  it("should call the given onSubmit if the form validation passes", async () => {
    const resolverPass: ResolverResult<{ foo: string }> = {
      values: { foo: "bar" },
      errors: {},
    };

    const mockResolver = jest.fn().mockReturnValue(resolverPass);
    const mockOnSubmit = jest.fn();

    const screen = render(
      <Form onSubmit={mockOnSubmit} resolver={mockResolver}>
        {() => {
          return (
            <>
              <button type="submit">Submit</button>
            </>
          );
        }}
      </Form>
    );

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(mockResolver).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
