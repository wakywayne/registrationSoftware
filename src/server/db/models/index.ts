export interface Users {
  password: any;
  id: number;
  personsname: string;
  email: string;
  userpassword: string;
  created_at: Date;
}

export interface MysqlResponse {
  affectedRows: number;
  insertId: number;
}
