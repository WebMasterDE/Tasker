import { HttpHeaders } from "@angular/common/http";

export function convertDate(date: string) {
  let dateObj = new Date(date);
  let month = dateObj.getMonth() + 1;
  let day = dateObj.getDate();
  let year = dateObj.getFullYear();

  console.log(day + '/' + month + '/' + year);
  return day + '/' + month + '/' + year;
}


export function createOptions() {
  let options = {
    headers: new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token"),
      'cache-control': 'no-cache',
    })
  };
  return options;
}
