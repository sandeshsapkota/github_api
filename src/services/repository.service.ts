import axios from "axios";

interface SearchParamTypes {
    q: string
}

/**
 * Represents a service for fetching GitHub repositories
 */
class RepositoryService {
    /**
     * Fetches repositories based on search params
     * @param query - query params
     */
    static async fetchRepositories(query: SearchParamTypes) {
        const queryParams = new URLSearchParams();
        queryParams.append("q", query.q);
        const url = `https://api.github.com/search/repositories?${queryParams.toString()}`
        try {
            return await axios.get(url)
        } catch (e) {
            console.error(e)
        }
    }
}

export default RepositoryService
