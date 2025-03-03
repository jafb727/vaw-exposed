/**
 * @author Jose A Felix
 * @name index
 * @description Application routing configuration file
 */

/** -------------------------------------------------------- */

/** @import Components */
import App from "../pages/app";
import Home from "../pages/home";
import Stories from "../pages/stories";
import Violence from "../pages/violence";
import Legal from "../pages/legal";
import Help from "../pages/help";

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
               {
                  path: "stories",
                  element: <Stories />,
               },
               {
                  path: "violence",
                  element: <Violence />,
               },
               {
                  path: "legal",
                  element: <Legal />,
               },
               {
                  path: "legal",
                  element: <Help />,
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
