/**
 * @author Jose A Felix
 * @name help
 * @description Help page component
 */

/** -------------------------------------------------------- */

/** @import Utilities */
import { JSX } from "react";

/** @import Types */
import { wrapperProps } from "../../types";

/** -------------------------------------------------------- */

/**
 * @name Help
 * @description Main application component
 * @returns {JSX.Element}
 */
const Help = (): JSX.Element => {
   /** Main component wrapper properties */
   const properties: wrapperProps = {
      "data-testid": "help-page",
   };

   /** ------------------------------ */

   return <div {...properties}>Help</div>;
};

/** -------------------------------------------------------- */

/** @exports @default Component */
export default Help;
