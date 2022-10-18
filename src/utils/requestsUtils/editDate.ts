export function editDate(requestData: string) {
  const date = new Date(requestData);

  return `${date.getDate()}/${
    date.getUTCMonth() + 1
  }/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
}
