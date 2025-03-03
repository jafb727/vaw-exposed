/**
 * @author Jose A Felix
 * @name home
 * @description Home page component
 */

/** -------------------------------------------------------- */

/** @import Utilities */
import { JSX } from "react";

/** @import Types */
import { wrapperProps } from "../../types";

/** -------------------------------------------------------- */

/**
 * @name Home
 * @description Main application component
 * @returns {JSX.Element}
 */
const Home = (): JSX.Element => {
   /** Main component wrapper properties */
   const properties: wrapperProps = {
      "data-testid": "home-page",
   };

   /** ------------------------------ */

   return <div {...properties}>Home</div>;
};
/** -------------------------------------------------------- */

/** @exports @default Component */
export default Home;
