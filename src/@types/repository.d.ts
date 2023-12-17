interface Owner {
    login: string;
    avatar_url: string;
}

export interface RepositoryType {
    id: number;
    full_name: string;
    html_url: string;
    watchers: number | string;
    stargazers_count: number | string;
    forks: number | string;
    updated_at: string;
    owner: Owner;
}
