/**
 * @author Jose A Felix
 * @name violence.test
 * @description Violence page component unit testing file
 */

/** -------------------------------------------------------- */

/** @import Components */
import Violence from "..";

/** @import Utilities */
import { renderComponent } from "../../../test/setupTests";

/** -------------------------------------------------------- */

describe("Violence", () => {
   it("Renders ok", () => {
      /** Component context mounting */
      const component = renderComponent(<Violence />);

      /** Main assertion */
      expect(component).not.toBe(null);
   });

   it("Renders main component wrapper", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<Violence />);

      /** Main assertion */
      const component = getByTestId("violence-page");
      expect(component).toBeInstanceOf(HTMLElement);
   });

   it("Matches snapshot", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<Violence />);

      /** Main assertion */
      const component = getByTestId("violence-page");
      expect(component).toMatchSnapshot();
   });
});
