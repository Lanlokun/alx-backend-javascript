export default function updateUniqueItems(mapInput) {
  if (mapInput instanceof Map) {
    for (const [key, value] of mapInput) {
      if (value === 1) {
        mapInput.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return mapInput;
}
