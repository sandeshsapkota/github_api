import {ChangeEvent, FormEvent, useState} from "react";

interface SearchBarProps {
    setSearchQuery: (value: string) => void
}

const SearchBar = (props: SearchBarProps) => {
    /*
    * PROPS AND STATES
    * */
    const {setSearchQuery,} = props
    const [query, setQuery] = useState<string>('')

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchQuery(query)
    }

    const ClearButton = () => {
        return (
            <button type="button" onClick={() => {
                setSearchQuery("")
                setQuery("")
            }}
                    className={"absolute top-[50%] right-3 -translate-y-[50%] text-sm text-black hover:text-black/70 transition duration-200"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" className="w-8 h-8">
                    <path fill="currentColor"
                          d="M6.1,6.1C.64,11.56,.64,20.44,6.1,25.9s14.34,5.46,19.8,0,5.46-14.34,0-19.8S11.56,.64,6.1,6.1Zm15.56,5.66l-4.24,4.24,4.24,4.24c.94,.94-.48,2.35-1.41,1.41l-4.24-4.24-4.24,4.24c-.94,.94-2.35-.48-1.41-1.41l4.24-4.24-4.24-4.24c-.94-.94,.48-2.35,1.41-1.41l4.24,4.24,4.24-4.24c.94-.94,2.35,.48,1.41,1.41Z"/>
                </svg>
            </button>
        )
    }

    const QuickAccess = () => {
        return (
            <div className={"absolute top-[50%] right-5 -translate-y-[50%]  gap-2 items-center text-gray-500 hidden md:flex"}>
                <span className="border border-gray-300 px-3 py-1 rounded-lg">
                    s
                </span>
                <span className="text-[#999] text-sm">quick access</span>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-3 flex-1">
            <div className="grid gap-1 flex-1">
                <div className="flex flex-col gap-4 ">
                    <form onSubmit={handleSearch} className="bg-gray-50 rounded-xl overflow-hidden">
                        <label htmlFor="default-search"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 left-1 top-1 flex items-center ps-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                     version="1.1" x="0px" y="0px"
                                     className="w-8 h-8 opacity-50"
                                     viewBox="0 0 100 125" xmlSpace="preserve">
                                    <path
                                        d="M80.2,75.9L69,64.8c8.5-10.6,7.7-26.2-2-35.9C61.9,23.8,55.2,21,48,21c-7.2,0-14,2.8-19.1,7.9C23.8,34,21,40.7,21,48  s2.8,14,7.9,19.1C34,72.1,40.7,75,48,75c6.1,0,12.1-2.1,16.8-5.9l11.1,11.1c0.6,0.6,1.3,0.9,2.1,0.9s1.6-0.3,2.1-0.9  C81.3,79,81.3,77.1,80.2,75.9z M69,48c0,5.6-2.2,10.9-6.2,14.8S53.6,69,48,69c-5.6,0-10.9-2.2-14.8-6.2S27,53.6,27,48  c0-5.6,2.2-10.9,6.2-14.8S42.3,27,48,27c5.6,0,10.9,2.2,14.8,6.2S69,42.3,69,48z"/>
                                </svg>
                            </div>
                            <input type="search"
                                   className="block w-full px-4 py-5 ps-12 text-sm text-gray-900 bg-transparent"
                                   placeholder="Search by repository name"
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                                   value={query}/>
                            {
                                query ? <ClearButton/> : <QuickAccess/>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default SearchBar;
