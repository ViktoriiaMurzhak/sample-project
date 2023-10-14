export function formatDateTime(dateTimeString: string) {
  const dateObj = new Date(dateTimeString);

  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');

  const formattedDateTime = `${day}.${month}.${year} ${hours}:${minutes}`;

  return formattedDateTime;
}
