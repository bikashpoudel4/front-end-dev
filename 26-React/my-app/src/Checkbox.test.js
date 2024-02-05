import React from "react";
import { Checkbox } from "./Checkbox";
import { fireEvent, render } from "@testing-library/react";

test("Checkbox Selection", () => {
  const { getByLabelText } = render(
    <Checkbox id="myCheckbox" label="not checked" />
  );
  const checkbox = getByLabelText(/not checked/);

  fireEvent.click(checkbox);

  // Use expect(checkbox).toBeChecked() instead of expect(checkbox.checked)
  expect(checkbox).toBeChecked();
});