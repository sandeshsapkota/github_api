import http from '@/utils/http/http.utils';
/**
 * Represents a service for fetching GitHub repositories
 */
class RepositoryService {
  /**
   * Fetches repositories based on search params
   * @param data - query params
   */
  static async fetchRepositories(data: any) {
    const queryParams = new URLSearchParams(data);
    const url = `/search/repositories?${queryParams.toString()}`;
    try {
      return await http().get(url);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  /**
   * Fetches repositories based on search params
   * @param data
   */
  static async fetchRepositoryReadMe(data: {
    repoName: string;
    username: string;
  }) {
    const { repoName, username } = data;
    try {
      return await http().get(
        `https://api.github.com/repos/${username}/${repoName}/readme`,
      );
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default RepositoryService;
