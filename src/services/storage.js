export function saveResult(key, data) {
  const existing = JSON.parse(localStorage.getItem(key) || '[]');
  existing.push(data);
  localStorage.setItem(key, JSON.stringify(existing));
}

export function getResults(key) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

export function exportToJson(key) {
  const data = getResults(key);
  return JSON.stringify(data, null, 2);
}
