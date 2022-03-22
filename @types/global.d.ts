/** @see https://tsdx.io/optimization#code-dev-code */
// declare var __DEV__: boolean; // defined in global scope from @types/react-native coincidentally 🤷‍♂️

/**
 * K properties in T become required, but remaining properties are still used in construction of
 * resultant type.
 */
declare type RequireProps<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;

/**
 * Take K properties of T and make them optional in resultant type.
 */
declare type Optional<T, K extends keyof T> = Partial<Pick<T, K>>;

declare module 'react/jsx-runtime';
