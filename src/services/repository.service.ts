import http from '@/utils/http/http.utils';

type SearchParamTypes = Record<'q' | 'page' | 'per_page' | 'order', string>;

/**
 * Represents a service for fetching GitHub repositories
 */
class RepositoryService {
  /**
   * Fetches repositories based on search params
   * @param query - query params
   */
  static async fetchRepositories(query: SearchParamTypes) {
    const queryParams = new URLSearchParams(query);
    const url = `/search/repositories?${queryParams.toString()}`;
    try {
      return await http().get(url);
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default RepositoryService;
