/**
 * @author Jose A Felix
 * @name setupTests
 * @description Testing environment custom setup for components mounting
 */

/** -------------------------------------------------------- */

/** @import Utilities */
import { render, RenderResult } from "@testing-library/react";
import { JSX } from "react";

/** -------------------------------------------------------- */

/**
 * @name renderComponent
 * @description Renders a component without providers
 * @param {JSX.Element} Component - component to render
 * @returns {RenderResult}
 */
export const renderComponent = (Component: JSX.Element): RenderResult => {
   return render(Component);
};
