export default function hasValuesFromArray(setInput, arrayInput) {
  if (Array.isArray(setInput) && Array.isArray(arrayInput)) {
    return arrayInput.every((element) => setInput.has(element));
  }
  return false;
}
