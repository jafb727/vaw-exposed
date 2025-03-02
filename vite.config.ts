/**
 * @author Jose A Felix
 * @name vite.config
 * @description Vite main configuration file
 */

/** -------------------------------------------------------- */

/** @import Libraries */
import react from "@vitejs/plugin-react-swc";

/** @import Utilities */
import { defineConfig } from "vite";

/** -------------------------------------------------------- */

/**
 * @function defineConfig
 * @description Main Vite configuration function
 * @see https://vite.dev/config/
 * @returns {object}
 */
export default defineConfig({
   plugins: [react()],
});
