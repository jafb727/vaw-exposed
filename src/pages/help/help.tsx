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
 * @name Help
 * @description Main application component
 * @returns {JSX.Element}
 */
const Help = (props: React.PropsWithChildren<TProps>): JSX.Element => {
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
