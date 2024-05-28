import { fetchUser } from './commands/fetchUser';
import { listUsers } from './commands/listUsers';
import { listUsersByLocation } from './commands/listUsersByLocation';

const [,, command, ...args] = process.argv;

(async () => {
  try {
    switch (command) {
      case 'fetchUser':
        await fetchUser(args[0]);
        break;
      case 'listUsers':
        await listUsers();
        break;
      case 'listUsersByLocation':
        await listUsersByLocation(args[0]);
        break;
      default:
        console.log('Unknown command');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }

})();
