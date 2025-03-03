/**
 * @author Jose A Felix
 * @name legal.test
 * @description Legal page component unit testing file
 */

/** -------------------------------------------------------- */

/** @import Components */
import Legal from "..";

/** @import Utilities */
import { renderComponent } from "../../../test/setupTests";

/** -------------------------------------------------------- */

describe("Legal", () => {
   it("Renders ok", () => {
      /** Component context mounting */
      const component = renderComponent(<Legal />);

      /** Main assertion */
      expect(component).not.toBe(null);
   });

   it("Renders main component wrapper", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<Legal />);

      /** Main assertion */
      const component = getByTestId("legal-page");
      expect(component).toBeInstanceOf(HTMLElement);
   });

   it("Matches snapshot", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<Legal />);

      /** Main assertion */
      const component = getByTestId("legal-page");
      expect(component).toMatchSnapshot();
   });
});
