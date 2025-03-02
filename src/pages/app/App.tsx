/**
 * @author Jose A Felix
 * @name App
 * @description Main application component
 */

/** -------------------------------------------------------- */

/** @import Hooks */
import { useState } from "react";

/** @import Utilities */
import { ReactElement } from "react";

/** @import Assets */
import reactLogo from "./../../assets/images/react.svg";
import viteLogo from "./../../assets/images/vite.svg";

/** @import Stylesheets */
import "./app.css";

/** -------------------------------------------------------- */

/**
 * @name App
 * @description Main application component
 * @returns {ReactElement}
 */
function App(): ReactElement {
   /** State */
   const [count, setCount] = useState(0);

   /** ------------------------------ */

   /**
    * @name countClicks
    * @description Increments counter according to user clicks
    * @returns {void}
    */
   const countClicks = (): void => {
      setCount((count) => {
         return count + 1;
      });
   };

   /** ------------------------------ */

   return (
      <>
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
            <button onClick={countClicks}>count is {count}</button>
            <p>
               Edit <code>src/App.tsx</code> and save to test HMR
            </p>
         </div>
         <p className="read-the-docs">
            Click on the Vite and React logos to learn more
         </p>
      </>
   );
}
/** -------------------------------------------------------- */

/** @exports @default Component */
export default App;
