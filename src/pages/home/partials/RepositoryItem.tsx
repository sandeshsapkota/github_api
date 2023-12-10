import {RepositoryType} from "@/@types/repository";

import {formatDate} from "@/utils/helpers/date.utils.ts";

import RepositoryStats from "@/pages/home/partials/RepositoryStats.tsx";

interface RepositoryItemProps {
    repository: RepositoryType;
}

const RepositoryItem = (props: RepositoryItemProps) => {
    /*
     * PROPS AND STATES
     * */
    const {repository} = props || {}
    const {full_name, html_url: url, watchers, stargazers_count, forks, updated_at, owner} = repository || {}
    const {login: author_name, avatar_url} = owner
    const updatedDate = formatDate(updated_at)

    const Link = () => {
        return (
            <a
                className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-bink-500"
                href={url}
                target="_blank"
            >
                <button
                    className="flex select-none items-center gap-2 rounded-lg py-2  -ml-4 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                >
                    Read More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                    </svg>
                </button>
            </a>
        )
    }

    return (
        <li className="bg-gray-50  hover:bg-gray-200  transition duration-300 rounded-xl p-5 md:p-8 shadow grid gap-4">
            <div className="flex gap-6 flex-wrap justify-between">
                <div className="flex items-center gap-2.5">
                    <img className="w-10 h-10 rounded-full object-cover" src={avatar_url} alt=""/>
                    <div>
                        <span className="font-semibold text-sm">  {full_name} </span>
                        {/*<p className="text-xs">updated on {updated_at}</p>*/}
                        <p className="text-xs">{author_name}</p>
                    </div>
                </div>
                <RepositoryStats stargazers_count={stargazers_count} watchers={watchers} forks={forks}/>
            </div>

            <p className="text-gray-600 text-sm">
                {full_name} is a GitHub repository owned by{" "}
                <b className="text-sm">{author_name}</b>. It has garnered attention with {stargazers_count} stars and
                has {watchers} watchers. The repository has been forked {forks} times and was last updated
                on {updatedDate}.
            </p>
            <div className="flex gap-4 flex-wrap items-center justify-between">
                <p className="text-xs">Last updated on <b className="text-gray-600">{updatedDate}</b></p>
                <Link/>
            </div>
        </li>
    )
}

export default RepositoryItem
