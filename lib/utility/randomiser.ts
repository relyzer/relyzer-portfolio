/**
 * A utility function to randomly select a value stored in an array and returned as a string
 * @param input An array of values.
 * @returns A string
 */

export const randomiser = (input: string[] | number[]): string => {
  const selector = Math.floor(Math.random() * input.length);
  const selectedValue = input[selector];
  if (typeof selectedValue === "string") {
    return selectedValue;
  }
  return `${selectedValue}`;
};
