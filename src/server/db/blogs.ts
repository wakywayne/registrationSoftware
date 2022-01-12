import { Query } from "./index";
import { Users } from "./models";

const selectAllFromEvents_table = () => Query("select * from events_table;");

const selectEventFromEvents_table = async (id: number) => await Query("select * from events_table where id=?;", [id]);

const find = (column: string, value: string | number) => {
  return Query("SELECT * from users_table WHERE ?? = ?", [
    column,
    value,
  ]);
};

const insertUser = (newUser: { email: string, password: string, role: string }) => {
  Query('Insert into users_table SET ?', [newUser]);
}

const insertEvent = (newEvent: { name_of_event: string, date_of_event: Date, location_of_event: string, event_description: string, created_by: number }) => {
  Query('Insert into events_table SET ?', [newEvent]);
}
export default {
  selectAllFromEvents_table,
  find,
  insertUser,
  insertEvent,
  selectEventFromEvents_table
};


