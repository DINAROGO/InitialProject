import { getUsers } from '../db';

export const listUsers = async () => {
  const users = await getUsers();
  console.log('Users:');
  users.forEach(user => {
    console.log(`${user.id}: ${user.name} - ${user.location}`);
  });
};
