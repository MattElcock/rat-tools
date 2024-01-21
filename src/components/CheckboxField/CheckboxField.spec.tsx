import { render, within } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import { FormProvider, useForm } from "react-hook-form";
import { CheckboxField } from ".";

describe("<CheckboxField />", () => {
  it("should render the given list of checkboxes", () => {
    const {
      result: { current: methods },
    } = renderHook(() => useForm());

    const screen = render(
      <FormProvider {...methods}>
        <CheckboxField
          name="favouriteColours"
          label="What are your favourite colours?"
          options={[
            { label: "Red", value: "red" },
            { label: "Green", value: "green" },
            { label: "Blue", value: "blue" },
          ]}
        />
      </FormProvider>
    );

    const fieldset = screen.getByRole("group", {
      name: "What are your favourite colours?",
    });

    expect(fieldset).toBeInTheDocument();
    expect(within(fieldset).getByLabelText("Red")).toBeInTheDocument();
    expect(within(fieldset).getByLabelText("Green")).toBeInTheDocument();
    expect(within(fieldset).getByLabelText("Blue")).toBeInTheDocument();
  });

  it("should render an error message when given", () => {
    const {
      result: { current: methods },
    } = renderHook(() => useForm());

    const screen = render(
      <FormProvider {...methods}>
        <CheckboxField
          name="favouriteColours"
          label="What are your favourite colours?"
          options={[
            { label: "Red", value: "red" },
            { label: "Green", value: "green" },
            { label: "Blue", value: "blue" },
          ]}
          error={{ message: "Required" }}
        />
      </FormProvider>
    );

    expect(
      screen.getByRole("group", {
        name: "What are your favourite colours?",
      })
    ).toBeInvalid();
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("should support being controlled by React Hook Form", async () => {
    const hook = renderHook(() => useForm());

    const {
      result: { current: methods },
    } = hook;

    const screen = render(
      <FormProvider {...methods}>
        <CheckboxField
          name="favouriteColours"
          label="What are your favourite colours?"
          options={[
            { label: "Red", value: "red" },
            { label: "Green", value: "green" },
            { label: "Blue", value: "blue" },
          ]}
          error={{ message: "Required" }}
        />
      </FormProvider>
    );

    await userEvent.click(screen.getByLabelText("Red"));
    await userEvent.click(screen.getByLabelText("Green"));

    expect(screen.getByLabelText("Red")).toBeChecked();
    expect(screen.getByLabelText("Green")).toBeChecked();
    expect(methods.getValues()).toMatchObject({
      favouriteColours: ["red", "green"],
    });
  });

  it("should support default values", () => {
    const hook = renderHook(() =>
      useForm({ defaultValues: { favouriteColours: ["red", "green"] } })
    );

    const {
      result: { current: methods },
    } = hook;

    const screen = render(
      <FormProvider {...methods}>
        <CheckboxField
          name="favouriteColours"
          label="What are your favourite colours?"
          options={[
            { label: "Red", value: "red" },
            { label: "Green", value: "green" },
            { label: "Blue", value: "blue" },
          ]}
          error={{ message: "Required" }}
        />
      </FormProvider>
    );

    expect(screen.getByLabelText("Red")).toBeChecked();
    expect(screen.getByLabelText("Green")).toBeChecked();
  });

  it("should uncheck a box", async () => {
    const hook = renderHook(() =>
      useForm({ defaultValues: { favouriteColours: ["red", "green"] } })
    );

    const {
      result: { current: methods },
    } = hook;

    const screen = render(
      <FormProvider {...methods}>
        <CheckboxField
          name="favouriteColours"
          label="What are your favourite colours?"
          options={[
            { label: "Red", value: "red" },
            { label: "Green", value: "green" },
            { label: "Blue", value: "blue" },
          ]}
          error={{ message: "Required" }}
        />
      </FormProvider>
    );

    await userEvent.click(screen.getByLabelText("Red"));

    expect(screen.getByLabelText("Red")).not.toBeChecked();
    expect(screen.getByLabelText("Green")).toBeChecked();
    expect(methods.getValues()).toMatchObject({
      favouriteColours: ["green"],
    });
  });
});
