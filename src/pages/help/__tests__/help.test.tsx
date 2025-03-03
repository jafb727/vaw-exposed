/**
 * @author Jose A Felix
 * @name help.test
 * @description Help page component unit testing file
 */

/** -------------------------------------------------------- */

/** @import Components */
import Help from "..";

/** @import Utilities */
import { renderComponent } from "../../../test/setupTests";

/** -------------------------------------------------------- */

describe("Help", () => {
   it("Renders ok", () => {
      /** Component context mounting */
      const component = renderComponent(<Help />);

      /** Main assertion */
      expect(component).not.toBe(null);
   });

   it("Renders main component wrapper", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<Help />);

      /** Main assertion */
      const component = getByTestId("help-page");
      expect(component).toBeInstanceOf(HTMLElement);
   });

   it("Matches snapshot", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<Help />);

      /** Main assertion */
      const component = getByTestId("help-page");
      expect(component).toMatchSnapshot();
   });
});
