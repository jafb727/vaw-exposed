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
/** Interface and Types */

/**
 * @type TProps
 * @description Component custom properties
 */
type TProps = {
   [key: string]: unknown;
};

/** -------------------------------------------------------- */

/**
 * @name Legal
 * @description Main application component
 * @returns {JSX.Element}
 */
const Legal = (props: React.PropsWithChildren<TProps>): JSX.Element => {
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
