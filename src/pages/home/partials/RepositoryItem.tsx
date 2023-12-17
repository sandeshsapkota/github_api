import {RepositoryType} from "@/@types/repository";

import {addCommasToNumber, formatDate} from "@/utils/helpers/date.utils.ts";

import RepositoryStats from "@/pages/home/partials/RepositoryStats.tsx";
import {Link} from "react-router-dom";

interface RepositoryItemProps {
    repository: RepositoryType;
}

const RepositoryItem = (props: RepositoryItemProps) => {
    /*
     * PROPS AND STATES
     * */
    const {repository} = props
    const {
        full_name,
        updated_at,
        owner: {login: author_name, avatar_url},
        watchers,
        stargazers_count,
        forks,
        id,
    } = repository;

    const formattedWatchers = addCommasToNumber(watchers);
    const formattedStargazers = addCommasToNumber(stargazers_count);
    const formattedForks = addCommasToNumber(forks);
    const updatedDate = formatDate(updated_at);


    const ReadMoreLink = () => {
        return (
            <Link
                to={`/repository/${id}`}
                className="flex select-none items-center gap-2 rounded-full py-2  px-4 text-center align-middle font-sans text-xs font-bold capitalize text-white transition-all bg-black hover:bg-black/80 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
            </Link>
        )
    }

    return (
        <li className="bg-gray-50 hover:bg-gray-200   transition duration-300 rounded-xl p-5 md:p-8 shadow grid gap-4">
            <div className="flex gap-6 flex-wrap justify-between">
                <div className="flex items-center gap-2.5">
                    <img className="w-10 h-10 rounded-full object-cover" src={avatar_url} alt=""/>
                    <div>
                        <span className="font-semibold text-sm">  {full_name} </span>
                        <p className="text-xs">{author_name}</p>
                    </div>
                </div>
                <RepositoryStats
                    forks={formattedForks}
                    stargazers_count={formattedStargazers}
                    watchers={formattedWatchers}
                />
            </div>
            <p className="text-gray-600 text-sm sm:pr-12 mt-0.5">
                {full_name} is a GitHub repository owned by{" "}
                {author_name}. It has garnered attention with {stargazers_count} stars and
                has {watchers} watchers. The repository has been forked {forks} times and was last updated
                on {updatedDate}.
            </p>
            <div className="flex gap-4 flex-wrap items-center justify-between">
                <p className="text-xs">Last updated on <b className="text-gray-600">{updatedDate}</b></p>
                <ReadMoreLink/>
            </div>
        </li>
    )
}

export default RepositoryItem
