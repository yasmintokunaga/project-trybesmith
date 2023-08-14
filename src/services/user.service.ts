import UserModel from '../database/models/user.model';
import { User } from '../types/User';

async function findOneUser(username: string): Promise<User | null> {
  const userModel = await UserModel.findOne({
    where: { username },
  });

  const user = userModel ? userModel.toJSON() as User : null;
  return user;
}

export default {
  findOneUser,
};
