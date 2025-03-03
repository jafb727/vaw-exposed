/**
 * @author Jose A Felix
 * @name index.test
 * @description Application routing configuration unit testing file
 */

/** -------------------------------------------------------- */

/** @import Components */
import { router } from "..";
import { RouterProvider } from "react-router-dom";

/** -------------------------------------------------------- */

describe("Routing", () => {
   it("Mounts router", () => {
      /** Router mounting */
      const app = <RouterProvider router={router} />;

      /** Main assertion */
      expect(app).not.toBe(null);
   });
});
