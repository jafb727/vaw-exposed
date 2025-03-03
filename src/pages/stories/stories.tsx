/**
 * @author Jose A Felix
 * @name stories
 * @description Stories page component
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
 * @name Stories
 * @description Main application component
 * @returns {JSX.Element}
 */
const Stories = (props: React.PropsWithChildren<TProps>): JSX.Element => {
   /** Main component wrapper properties */
   const properties: wrapperProps = {
      "data-testid": "stories-page",
   };

   /** ------------------------------ */

   return <div {...properties}>Stories</div>;
};

/** -------------------------------------------------------- */

/** @exports @default Component */
export default Stories;
