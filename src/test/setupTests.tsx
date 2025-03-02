/**
 * @author Jose A Felix
 * @name setupTests
 * @description Testing environment custom setup for components mounting
 */

/** -------------------------------------------------------- */

/** @import Utilities */
import { render } from "@testing-library/react";
import { ComponentType } from "react";

/** -------------------------------------------------------- */

/**
 * @name renderComponent
 * @description Renders a component without providers
 * @param {JSX.Element} Component - component to render
 * @returns {RenderResult}
 */
export function renderComponent(Component: ComponentType) {
   return render(<Component />);
}
