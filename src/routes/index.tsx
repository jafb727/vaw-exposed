/**
 * @author Jose A Felix
 * @name index
 * @description Application routing configuration file
 */

/** -------------------------------------------------------- */

/** @import Components */
import App from "../pages/app";

/** @import Utilities */
import { createBrowserRouter } from "react-router-dom";

/** -------------------------------------------------------- */

/**
 * @name router
 * @description React router configuration
 */
export const router: ReturnType<typeof createBrowserRouter> =
   createBrowserRouter(
      [
         {
            path: "/",
            element: <App />,
            children: [],
         },
      ],
      {
         future: {
            v7_relativeSplatPath: true,
         },
      }
   );
