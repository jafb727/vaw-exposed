/**
 * @author Jose A Felix
 * @name app
 * @description Main application component
 */

/** -------------------------------------------------------- */

/** @import Hooks */
import { useState } from "react";

/** @import Utilities */
import { JSX } from "react";

/** @import Types */
import { wrapperProps } from "../../types";

/** @import Assets */
import reactLogo from "../../assets/images/react.svg";
import viteLogo from "../../assets/images/vite.svg";

/** @import Stylesheets */
import "./app.css";

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
 * @name App
 * @description Main application component
 * @returns {JSX.Element}
 */
const App = (props: React.PropsWithChildren<TProps>): JSX.Element => {
   /** State */
   const [count, setCount] = useState<number>(0);

   /** ------------------------------ */

   /**
    * @name countClicks
    * @description Increments counter according to user clicks
    * @returns {void}
    */
   const countClicks = (): void => {
      setCount((count: number): number => {
         return count + 1;
      });
   };

   /** ------------------------------ */

   /** Main component wrapper properties */
   const properties: wrapperProps = {
      "data-testid": "app-page",
   };

   /** ------------------------------ */

   return (
      <div {...properties}>
         <div>
            <a href="https://vite.dev" target="_blank" rel="noreferrer">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <h1>Vite + React</h1>
         <div className="card">
            <button data-testid="counter" onClick={countClicks}>
               count is {count}
            </button>
            <p>
               Edit <code>src/App.tsx</code> and save to test HMR
            </p>
         </div>
         <p className="read-the-docs">
            Click on the Vite and React logos to learn more
         </p>
      </div>
   );
};

/** -------------------------------------------------------- */

/** @exports @default Component */
export default App;
