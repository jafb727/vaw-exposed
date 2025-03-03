/**
 * @author Jose A Felix
 * @name stories.test
 * @description Stories page component unit testing file
 */

/** -------------------------------------------------------- */

/** @import Components */
import Stories from "..";

/** @import Utilities */
import { renderComponent } from "../../../test/setupTests";

/** -------------------------------------------------------- */

describe("Stories", () => {
   it("Renders ok", () => {
      /** Component context mounting */
      const component = renderComponent(<Stories />);

      /** Main assertion */
      expect(component).not.toBe(null);
   });

   it("Renders main component wrapper", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<Stories />);

      /** Main assertion */
      const component = getByTestId("stories-page");
      expect(component).toBeInstanceOf(HTMLElement);
   });

   it("Matches snapshot", () => {
      /** Component context mounting */
      const { getByTestId } = renderComponent(<Stories />);

      /** Main assertion */
      const component = getByTestId("stories-page");
      expect(component).toMatchSnapshot();
   });
});
