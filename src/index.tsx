/**
 * @author Jose A Felix
 * @name index
 * @description Application entry file
 */

/** -------------------------------------------------------- */

/** @import Components */
import App from "./pages/app";

/** @import Utilities */
import { createRoot } from "react-dom/client";

/** @import Stylesheets */
import "./index.css";

/** -------------------------------------------------------- */
/** Mounting React App into unique HTMLElement */

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const appContainer = document.getElementById("root")!;
const root = createRoot(appContainer);
root.render(<App />);
