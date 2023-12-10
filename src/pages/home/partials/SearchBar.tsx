import {ChangeEvent, FormEvent, useState} from "react";

interface SearchBarProps {
    searchQuery: string
    setSearchQuery: (value: string) => void
    result_length: number
}

const SearchBar = (props: SearchBarProps) => {
    /*
    * PROPS AND STATES
    * */
    const {searchQuery, setSearchQuery, result_length} = props
    const [query, setQuery] = useState<string>('')

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchQuery(query)
    }

    return (
        <div className="grid gap-1">
            <h1 className="text-md">Search</h1>
            <div className="flex flex-col gap-4 ">
                <form onSubmit={handleSearch}>
                    <label htmlFor="default-search"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div
                            className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor"
                                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search"
                               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                               placeholder="Enter repositories name.."
                               onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                               value={query}/>
                        <button type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                        </button>
                    </div>
                </form>
                <div className="flex justify-between">
                    {searchQuery && <p className="text-xs">Showing results for <b>{query}</b></p>}
                    {result_length !== undefined &&
                        <p className="text-xs"><b>{result_length}</b> repositories found.</p>}
                </div>
            </div>
        </div>

    )
}

export default SearchBar;
