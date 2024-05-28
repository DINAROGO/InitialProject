import pgPromise from 'pg-promise';
import { IUser, IUserLanguage } from './types';

const pgp = pgPromise();
const db = pgp('postgres://postgres:mary26Diogo@localhost:5433/postgres');

export const addUser = async (user: IUser): Promise<number> => {
  const { name, location } = user;
  const result = await db.one(
    'INSERT INTO users(name, location) VALUES($1, $2) RETURNING id',
    [name, location]
  );
  return result.id;
};

export const addUserLanguage = async (userId: number, language: string) => {
  await db.none(
    'INSERT INTO user_languages(user_id, language) VALUES($1, $2)',
    [userId, language]
  );
};

export const getUsers = async (): Promise<IUser[]> => {
  return await db.any('SELECT * FROM users');
};

export const getUsersByLocation = async (location: string): Promise<IUser[]> => {
  return await db.any('SELECT * FROM users WHERE location = $1', location);
};

export const getUsersByLocationAndLanguage = async (
  location: string,
  language: string
): Promise<IUser[]> => {
  return await db.any(
    `SELECT u.* FROM users u 
     JOIN user_languages ul ON u.id = ul.user_id 
     WHERE u.location = $1 AND ul.language = $2`,
    [location, language]
  );
};
