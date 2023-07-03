export default function setFromArray(setInput) {
  if (Array.isArray(setInput)) {
    return new Set(setInput);
  }
  return new Set();
}