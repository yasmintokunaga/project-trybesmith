import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import userService from '../services/user.service';
import jwtUtil from '../utils/jwt.util';

async function validateFields(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  next();
}

async function verifyUserPassword(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  const user = await userService.findOneUser(username);

  if (!user) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    next();
  } else {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
}

async function login(req: Request, res: Response) {
  const { username } = req.body;
  
  const user = await userService.findOneUser(username);
  
  if (user) {
    const token = jwtUtil.sign({ id: user.id, username: user.username });
    return res.status(200).json({ token });
  }
}

export default {
  validateFields,
  verifyUserPassword,
  login,
};
