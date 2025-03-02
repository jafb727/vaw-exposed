/**
 * @author Jose A Felix
 * @name App
 * @description Main application component
 */

/** -------------------------------------------------------- */

/** @import Hooks */
import { useState } from "react";

/** @import Assets */
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

/** @import Stylesheets */
import "./App.css";

/** -------------------------------------------------------- */

/**
 * @name App
 * @description Main application component
 * @returns {JSX | null}
 */
function App() {
   /** State */
   const [count, setCount] = useState(0);

   /** ------------------------------ */

   return (
      <>
         <div>
            <a href="https://vite.dev" target="_blank">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <h1>Vite + React</h1>
         <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>
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
