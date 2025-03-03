/**
 * @author Jose A Felix
 * @name index
 * @description Application routing configuration file
 */

/** -------------------------------------------------------- */

/** @import Components */
import App from "../pages/app";
import Home from "../pages/home";

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
            children: [
               {
                  index: true,
                  element: <Home />,
               },
            ],
         },
      ],
      {
         future: {
            v7_relativeSplatPath: true,
         },
      }
   );
