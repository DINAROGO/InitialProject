import { fetchGitHubUser, fetchGitHubUserLanguages } from '../github';
import { addUser, addUserLanguage } from '../db';

export const fetchUser = async (username: string) => {
  const user = await fetchGitHubUser(username);
  const userId = await addUser(user);
  const languages = await fetchGitHubUserLanguages(username);
  for (const language of languages) {
    await addUserLanguage(userId, language);
  }
  console.log(`User ${username} and their languages have been saved.`);
};
