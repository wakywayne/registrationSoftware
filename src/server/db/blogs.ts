import { Query } from "./index";
import { Users } from "./models";

const selectAllFromEvents_table = () => Query("select * from events_table;");

const selectAllDivisions = (id: number) => Query("select * from division_table where event_id = ?;", [id]);

const selectEventFromEvents_table = async (id: number) => await Query("select * from events_table where id=?;", [id]);

const selectEventNameFromEvents_table = async (name: string) => await Query("select id from events_table where name_of_event=?;", [name]);

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


const insertDivision = (newDivision: { name_of_division: string, age: string, weight_class: string, skill_level: string, cost: number, event_id: number }) => {
  Query('Insert into division_table SET ?', [newDivision]);
}
export default {
  selectAllFromEvents_table,
  find,
  insertUser,
  insertEvent,
  insertDivision,
  selectEventFromEvents_table,
  selectEventNameFromEvents_table,
  selectAllDivisions
};


