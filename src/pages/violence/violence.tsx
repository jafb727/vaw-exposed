/**
 * @author Jose A Felix
 * @name violence
 * @description Violence page component
 */

/** -------------------------------------------------------- */

/** @import Utilities */
import { JSX } from "react";

/** @import Types */
import { wrapperProps } from "../../types";

/** -------------------------------------------------------- */

/**
 * @name Violence
 * @description Main application component
 * @returns {JSX.Element}
 */
const Violence = (): JSX.Element => {
   /** Main component wrapper properties */
   const properties: wrapperProps = {
      "data-testid": "violence-page",
   };

   /** ------------------------------ */

   return <div {...properties}>Violence</div>;
};

/** -------------------------------------------------------- */

/** @exports @default Component */
export default Violence;
