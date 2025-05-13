export function convertDate(date: string) {
  let dateObj = new Date(date);
  let month = dateObj.getMonth() + 1;
  let day = dateObj.getDate();
  let year = dateObj.getFullYear();

  console.log(day + '/' + month + '/' + year);
  return day + '/' + month + '/' + year;
}
