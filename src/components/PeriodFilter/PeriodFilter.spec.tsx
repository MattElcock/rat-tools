import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataPeriod, PeriodFilter } from ".";

describe("<PeriodFilter />", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2024, 1, 2)); // Months are zero based, so 1 === February
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it.each([DataPeriod.Week, DataPeriod.Month])(
    "should set %s as the selected period if it is the default",
    (defaultPeriod) => {
      const mockChildren = jest.fn();

      const screen = render(
        <PeriodFilter defaultPeriod={defaultPeriod}>
          {mockChildren}
        </PeriodFilter>
      );

      expect(
        screen.getByRole("button", { name: defaultPeriod })
      ).toHaveAttribute("aria-pressed", "true");
    }
  );

  describe("Period: Week", () => {
    it("should disable the next button if it would mean traveling into the future", async () => {
      const mockChildren = jest.fn();

      const screen = render(
        <PeriodFilter defaultPeriod={DataPeriod.Week}>
          {mockChildren}
        </PeriodFilter>
      );

      expect(screen.getByLabelText("Next Week")).toBeDisabled();
    });

    it("should give children the calculated daterange on first render", async () => {
      const mockChildren = jest.fn();

      render(
        <PeriodFilter defaultPeriod={DataPeriod.Week}>
          {mockChildren}
        </PeriodFilter>
      );

      expect(mockChildren).toHaveBeenLastCalledWith({
        start: "2024-01-29T00:00:00.000Z",
        end: "2024-02-04T23:59:59.999Z",
      });
    });

    it("should give children the updated daterange when the last period button is pressed", async () => {
      const mockChildren = jest.fn();

      const screen = render(
        <PeriodFilter defaultPeriod={DataPeriod.Week}>
          {mockChildren}
        </PeriodFilter>
      );

      const user = userEvent.setup({ delay: null });
      await user.click(screen.getByLabelText("Last Week"));

      expect(mockChildren).toHaveBeenLastCalledWith({
        start: "2024-01-22T00:00:00.000Z",
        end: "2024-01-28T23:59:59.999Z",
      });
    });

    it("should give children the updated daterange when the next period button is pressed", async () => {
      const mockChildren = jest.fn();

      const screen = render(
        <PeriodFilter defaultPeriod={DataPeriod.Week}>
          {mockChildren}
        </PeriodFilter>
      );

      const user = userEvent.setup({ delay: null });
      await user.click(screen.getByLabelText("Last Week"));
      await user.click(screen.getByLabelText("Next Week"));

      expect(mockChildren).toHaveBeenLastCalledWith({
        start: "2024-01-29T00:00:00.000Z",
        end: "2024-02-04T23:59:59.999Z",
      });
    });
  });

  describe("Period: Month", () => {
    it("should disable the next button if it would mean traveling into the future", async () => {
      const mockChildren = jest.fn();

      const screen = render(
        <PeriodFilter defaultPeriod={DataPeriod.Month}>
          {mockChildren}
        </PeriodFilter>
      );

      expect(screen.getByLabelText("Next Month")).toBeDisabled();
    });

    it("should give children the calculated daterange on first render", async () => {
      const mockChildren = jest.fn();

      render(
        <PeriodFilter defaultPeriod={DataPeriod.Month}>
          {mockChildren}
        </PeriodFilter>
      );

      expect(mockChildren).toHaveBeenLastCalledWith({
        start: "2024-02-01T00:00:00.000Z",
        end: "2024-02-29T23:59:59.999Z",
      });
    });

    it("should give children the updated daterange when the last period button is pressed", async () => {
      const mockChildren = jest.fn();

      const screen = render(
        <PeriodFilter defaultPeriod={DataPeriod.Month}>
          {mockChildren}
        </PeriodFilter>
      );

      const user = userEvent.setup({ delay: null });
      await user.click(screen.getByLabelText("Last Month"));

      expect(mockChildren).toHaveBeenLastCalledWith({
        start: "2024-01-01T00:00:00.000Z",
        end: "2024-01-31T23:59:59.999Z",
      });
    });

    it("should give children the updated daterange when the next period button is pressed", async () => {
      const mockChildren = jest.fn();

      const screen = render(
        <PeriodFilter defaultPeriod={DataPeriod.Month}>
          {mockChildren}
        </PeriodFilter>
      );

      const user = userEvent.setup({ delay: null });
      await user.click(screen.getByLabelText("Last Month"));
      await user.click(screen.getByLabelText("Next Month"));

      expect(mockChildren).toHaveBeenLastCalledWith({
        start: "2024-02-01T00:00:00.000Z",
        end: "2024-02-29T23:59:59.999Z",
      });
    });
  });
});
