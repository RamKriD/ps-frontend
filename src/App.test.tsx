import {render,screen} from "@testing-library/react";
import App from "./App";

test("App ", () => {
  render(<App />);
  expect(screen.getByText('Hello World')).toBeTruthy();
});
