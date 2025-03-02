/**
 * @author Jose A Felix
 * @name app.test
 * @description Main application component unit testing file
 */

/** -------------------------------------------------------- */

/** @import Components */
import App from "..";

/** @import Utilities */
import { renderComponent } from "../../../test/setupTests";
import userEvent from "@testing-library/user-event";

/** -------------------------------------------------------- */

describe("App", () => {
   it("Renders ok", () => {
      /** Component context mounting */
      const component = renderComponent(<App />);

      /** Main assertion */
      expect(component).not.toBe(null);
   });

   it("Renders main component wrapper", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<App />);

      /** Main assertion */
      const component = getByTestId("app-page");
      expect(component).toBeInstanceOf(HTMLElement);
   });

   it("Increases count when clicking button", async () => {
      /** Component context mounting */
      const { getByTestId, findByTestId } = renderComponent(<App />);

      /** Triggering user interaction */
      const button = getByTestId("counter");
      await userEvent.click(button);

      /** Main assertion */
      const _button = await findByTestId("counter");
      expect(_button.textContent).toContain("1");
   });

   it("Matches snapshot", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<App />);

      /** Main assertion */
      const component = getByTestId("app-page");
      expect(component).toMatchSnapshot();
   });
});
