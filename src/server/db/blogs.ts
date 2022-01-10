import { Query } from "./index";
import { Users } from "./models";

const selectAllFromThe_database_name = async () => Query("select * from the_database_name;");

const find = (column: string, value: string | number) => {
  return Query("SELECT * from the_database_name WHERE ?? = ?", [
    column,
    value,
  ]);
};

const insert = (newUser: { personsname: string, email: string, password: string }) => {
  Query('Insert into suggestedeventsusers SET ?', [newUser]);
}

export default {
  selectAllFromThe_database_name,
  find,
  insert
};


