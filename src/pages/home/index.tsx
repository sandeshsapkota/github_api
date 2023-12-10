import {useQuery} from "@tanstack/react-query";
import RepositoryService from "@/services/repository.service.ts";
import {useState} from "react";
import RepositoryList from "@/pages/home/partials/RepositoryList.tsx";
import SearchBar from "@/pages/home/partials/SearchBar.tsx";

function HomePage() {
    const [searchQuery, setSearchQuery] = useState<string>('')

    const {data: repositories} = useQuery({
        queryKey: ["repositories", searchQuery],
        queryFn: () => RepositoryService.fetchRepositories({q: searchQuery}),
        enabled: Boolean(searchQuery)
    })

    return (
        <section className="min-h-screen bg-gray-100">
            <div className="container">
                <div className="grid gap-10 py-9 lg:w-4/5 mx-auto">
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} result_length={repositories?.data?.items?.length}/>
                    <RepositoryList repositories={repositories?.data?.items || []}/>
                </div>
            </div>
        </section>
    )
}

export default HomePage
