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

/** -------------------------------------------------------- */

describe("App", () => {
   it("Renders ok", () => {
      /** Component context mounting */
      const component = renderComponent(<App />);

      /** Main assertion */
      expect(component).not.toBe(null);
   });

   it("Renders main component", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<App />);

      /** Main assertion */
      const component = getByTestId("app-page");
      expect(component).toBeInstanceOf(HTMLElement);
   });

   it("Matches snapshot", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<App />);

      /** Main assertion */
      const component = getByTestId("app-page");
      expect(component).toMatchSnapshot();
   });
});
