/**
 * @author Jose A Felix
 * @name index
 * @description Global App types
 */

/** -------------------------------------------------------- */

/**
 * @type wrapperProps
 * @description Basic properties for any component JSX wrapper
 * @param {string | undefined} id - wrapper id
 * @param {string | undefined} className - wrapper class name
 * @param {string | undefined} "data-testid" - wrapper data-testid
 */
export type wrapperProps = {
   id?: string;
   className?: string;
   "data-testid": string;
};
