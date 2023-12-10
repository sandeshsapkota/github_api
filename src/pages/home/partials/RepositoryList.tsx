import RepositoryItem from "@/pages/home/partials/RepositoryItem.tsx";
import {RepositoryType} from "@/@types/repository";

const RepositoryList = (props: { repositories: RepositoryType[] }) => {
    const {repositories}= props
    return (
        <ul className="grid gap-6">
            {repositories?.map((repository: RepositoryType) => <RepositoryItem repository={repository}/>)}
        </ul>
    )
}

export default RepositoryList
