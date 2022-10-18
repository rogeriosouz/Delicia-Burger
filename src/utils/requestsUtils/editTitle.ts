export function editTitle(requestData: string) {
  const date = new Date(requestData);

  return `${date.getDay()}${date.getMonth()}${date.getHours()}${date.getMinutes()}`;
}
