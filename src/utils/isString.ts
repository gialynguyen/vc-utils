import { isArray } from "./isArray";

export function isString(value: any): boolean {
  const valueType = typeof value;
  return (
    valueType === "string" ||
    (valueType === "object" &&
      value != null &&
      !isArray(value) &&
      toString.call(value) == "[object String]")
  );
}
