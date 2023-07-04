export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const startStringLen = startString.length;
  return [...set].filter((element) => element.startsWith(startString)).map((element) => element.slice(startStringLen)).join('-');
}
