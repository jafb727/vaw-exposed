/**
 * @author Jose A Felix
 * @name home.test
 * @description Home page component unit testing file
 */

/** -------------------------------------------------------- */

/** @import Components */
import Home from "..";

/** @import Utilities */
import { renderComponent } from "../../../test/setupTests";

/** -------------------------------------------------------- */

describe("Home", () => {
   it("Renders ok", () => {
      /** Component context mounting */
      const component = renderComponent(<Home />);

      /** Main assertion */
      expect(component).not.toBe(null);
   });

   it("Renders main component wrapper", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<Home />);

      /** Main assertion */
      const component = getByTestId("home-page");
      expect(component).toBeInstanceOf(HTMLElement);
   });

   it("Matches snapshot", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<Home />);

      /** Main assertion */
      const component = getByTestId("home-page");
      expect(component).toMatchSnapshot();
   });
});
