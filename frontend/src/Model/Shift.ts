import {User} from "./User";

export interface Shift {
  start_date: Date,
  end_date: Date | null,
  hour: number,
  Id_user: number
  Id_user_user: User | null
}
