/**
 * @author Jose A Felix
 * @name legal
 * @description Legal page component
 */

/** -------------------------------------------------------- */

/** @import Utilities */
import { JSX } from "react";

/** @import Types */
import { wrapperProps } from "../../types";

/** -------------------------------------------------------- */

/**
 * @name Legal
 * @description Main application component
 * @returns {JSX.Element}
 */
const Legal = (): JSX.Element => {
   /** Main component wrapper properties */
   const properties: wrapperProps = {
      "data-testid": "legal-page",
   };

   /** ------------------------------ */

   return <div {...properties}>Legal</div>;
};

/** -------------------------------------------------------- */

/** @exports @default Component */
export default Legal;
