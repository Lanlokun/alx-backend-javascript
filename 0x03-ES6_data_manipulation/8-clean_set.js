export default function cleanSet(setInput, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const startStringLen = startString.length;
  return [...setInput].filter((element) => element.startsWith(startString)).map((element) => element.slice(startStringLen)).join('-');
}
