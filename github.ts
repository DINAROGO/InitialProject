import axios from 'axios';
import { IUser, IUserLanguage } from './types';

const GITHUB_API_URL = 'https://api.github.com';

export const fetchGitHubUser = async (username: string): Promise<IUser> => {
  const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
  const { name, location } = response.data;
  return { name, location };
};

export const fetchGitHubUserLanguages = async (
  username: string
): Promise<string[]> => {
  const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
  const languages = new Set<string>();
  response.data.forEach((repo: any) => {
    if (repo.language) {
      languages.add(repo.language);
    }
  });
  return Array.from(languages);
};
