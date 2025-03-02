/**
 * @author Jose A Felix
 * @name main
 * @description Application entry file
 */

/** -------------------------------------------------------- */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <App />
   </StrictMode>
);
