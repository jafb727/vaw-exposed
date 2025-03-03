/**
 * @author Jose A Felix
 * @name index
 * @description Application entry file
 */

/** -------------------------------------------------------- */

/** @import Routing */
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

/** @import Utilities */
import { createRoot } from "react-dom/client";

/** @import Stylesheets */
import "./index.css";

/** -------------------------------------------------------- */
/** Mounting React App into unique HTMLElement */

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const appContainer = document.getElementById("root")!;
const root = createRoot(appContainer);

/** Rendering App with providers */
root.render(<RouterProvider router={router} />);
