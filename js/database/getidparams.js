export function getByIDSearch({ database }) {
  const URLInfo = new URLSearchParams(window.location.search);
  const URLID = URLInfo.get("id");
  const Object = database[URLID];
  return Object;
}
