export type Value = string | boolean | undefined | null;
export type Mapping = Record<string, any>;
export interface ArgumentArray extends Array<Argument> {}
export interface ReadonlyArgumentArray extends ReadonlyArray<Argument> {}
export type Argument = Value | Mapping | ArgumentArray | ReadonlyArgumentArray;

/**
 * A utility for conditionally joining classNames together.
 * Handles various argument types: string, object, arrays, etc.
 */
export default function classter(...args: ArgumentArray): string {
  const classes: string[] = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (!arg) {
      // Skip falsy values: false, null, undefined, 0, "", NaN
      continue;
    }

    if (typeof arg === "string") {
      // Add non-empty strings directly
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      // Recursively handle arrays of arguments
      if (arg.length) {
        const inner = classter(...arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (typeof arg === "object") {
      // Handle objects (mapping of className to boolean value)
      for (const key in arg) {
        if (Object.hasOwnProperty.call(arg, key) && (arg as any)[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
}
