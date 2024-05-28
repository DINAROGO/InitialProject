import { getUsersByLocation } from '../db';

export const listUsersByLocation = async (location: string) => {
  const users = await getUsersByLocation(location);
  console.log(`Users in ${location}:`);
  users.forEach(user => {
    console.log(`${user.id}: ${user.name} - ${user.location}`);
  });
};
