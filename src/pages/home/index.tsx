import {useState} from "react";
import {useQuery} from "@tanstack/react-query";

import RepositoryService from "@/services/repository.service.ts";
import {addCommasToNumber} from "@/utils/helpers/date.utils.ts";

import SearchFilter from "@/pages/home/partials/SearchFilter.tsx";
import SearchBar from "@/pages/home/partials/SearchBar.tsx";
import RepositoryList from "@/pages/home/partials/RepositoryList.tsx";
import RepositorySkeleton from "@/components/skeletons/RepositorySkeleton.tsx";
import SearchIllustration from "@/components/illustration/SearchIllustration.tsx";
import ServerErrorIllustration from "@/components/illustration/ServerErrorIllustration.tsx";
import IllustrationWrapper from "@/components/illustration/IllustrationWrapper.tsx";

function Home() {
    /*
    * STATE
    * */
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [perPage, setPerPage] = useState("25")
    const [order, setOrder] = useState("asc");
    const [page, setPage] = useState(1)

    /*
    * REACT QUERY
    * */
    const {data: repositories, isLoading, error} = useQuery({
        queryKey: ["repositories", searchQuery, perPage, order, page],
        queryFn: () => RepositoryService.fetchRepositories({
            q: searchQuery,
            per_page: perPage,
            order: order,
            page
        }),
        enabled: Boolean(searchQuery),
        retry: 0,
    })

    const totalCount = repositories?.data?.total_count

    /*
    * HANDLERS
    * */
    const handlePageClick = (page: { selected: number }) => setPage(page?.selected)

    const handleSortChange = (type: 'ordering' | 'perPage', value: string) => {
        type === "ordering" ? setOrder(value) : setPerPage(value)
        setPage(1)
    }

    const Error = () => <IllustrationWrapper children={<ServerErrorIllustration/>}
                                             message="Something went wrong while fetching the data. Please try again !"/>

    const TrySearch = () => <IllustrationWrapper children={<SearchIllustration/>}
                                                 message="Try searching the repository by adding keyword on searchbar."/>

    const Content = () => {
        return (
            <>
                <div className="flex items-center justify-end">
                    {repositories?.data?.total_count !== undefined &&
                        <p className="text-xs">
                            <b>{addCommasToNumber(totalCount)}</b> repositories found.</p>}
                </div>
                {searchQuery ? isLoading ? <RepositorySkeleton limit={Number(perPage)}/>
                        :
                        <RepositoryList repositories={repositories?.data?.items || []}
                                        page={page}
                                        handlePageClick={handlePageClick}
                                        pageCount={Math.ceil(totalCount / Number(perPage))}/> :
                    <TrySearch/>}
            </>
        )
    }

    return (
        <section className="min-h-screen ">
            <div className="container">
                <div className="grid gap-10 py-9 lg:w-4/5 mx-auto">
                    <div className="grid gap-6">
                        <div className="flex items-center gap-3">
                            <SearchBar setSearchQuery={setSearchQuery}/>
                            <SearchFilter handleSortChange={handleSortChange} selectedOrdering={order}
                                          selectedPerPage={perPage}/>
                        </div>
                        {!error &&
                            <div className="flex justify-between gap-6 items-center ">
                                {searchQuery && <p className="text-xs">Showing results for <b>{searchQuery}</b></p>}
                            </div>
                        }
                    </div>
                    {error?.message ? <Error/> : <Content/>}
                </div>
            </div>
        </section>
    )
}

export default Home
