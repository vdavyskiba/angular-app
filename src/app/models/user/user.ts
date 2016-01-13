interface IUser{

  _id: number;
  username: string;
  email: string;
  created: number;
  first?: string;
  last?: string;
  active?: boolean;
  balance?: number;
  details?: string;

}

export default IUser;
