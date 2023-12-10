interface Owner {
    login: string;
    avatar_url: string;
}
export interface RepositoryType {
    full_name: string;
    html_url: string;
    watchers: number;
    stargazers_count: number;
    forks: number;
    updated_at: string;
    owner: Owner;
}
