/**
 * @author Jose A Felix
 * @name index
 * @description Application routing configuration file
 */

/** -------------------------------------------------------- */

/** @import Components */
import { createBrowserRouter } from "react-router-dom";
import App from "../pages/app";

/** @import Utilities */
import { createRoot } from "react-dom/client";

/** -------------------------------------------------------- */

/**
 * @name router
 * @description React router configuration
 */
export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [],
   },
]);
