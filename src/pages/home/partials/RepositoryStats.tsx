import {Forks, Star, Watchers} from "@/components/icons";

interface StatTypes {
    stargazers_count: number,
    watchers: number,
    forks: number
}

const RepositoryStats = (props: StatTypes) => {
    /*
    * PROPS AND STATES
    * */

    const {stargazers_count, forks, watchers} = props

    const stats = [
        {
            label: `${stargazers_count} stars`,
            component: <Star/>
        },
        {
            label: `${watchers} watching`,
            component: <Watchers/>
        },
        {
            label: `${forks} forks`,
            component: <Forks/>
        },
    ]

    return (
        <div className="flex flex-wrap text-gray-700 text-sm capitalize gap-2.5">
            {stats.map(item => {
                const {label, component} = item
                return (
                    <div className="flex items-center">
                        {component}
                        {label}
                    </div>
                )
            })}
        </div>
    );
};

export default RepositoryStats;
