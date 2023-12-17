import { RepositoryType } from '@/@types/repository';

import { addCommasToNumber, formatDate } from '@/utils/helpers/date.utils';

import ArrowRight from '@/assets/icons/arrow-right.svg?react';
import RepositoryStats from '@/pages/home/partials/repository/RepositoryStats';
import Button from '@/components/button';

interface RepositoryItemProps {
  repository: RepositoryType;
}

const RepositoryItem = (props: RepositoryItemProps) => {
  /*
     * PROPS AND STATES
     * */
  const { repository } = props;
  const {
    full_name,
    updated_at,
    owner: { login: author_name, avatar_url },
    watchers,
    stargazers_count,
    forks,
    id,
  } = repository;

  const formattedWatchers = addCommasToNumber(watchers);
  const formattedStargazers = addCommasToNumber(stargazers_count);
  const formattedForks = addCommasToNumber(forks);
  const updatedDate = formatDate(updated_at);

  return (
    <li className="bg-gray-50 hover:bg-gray-200   transition duration-300 rounded-xl p-5 md:p-8 shadow grid gap-4">
      <div className="flex gap-6 flex-wrap justify-between">
        <div className="flex items-center gap-2.5">
          <img className="w-10 h-10 rounded-full object-cover" src={avatar_url} alt="" />
          <div>
            <span className="font-semibold text-sm">
              {' '}
              {full_name}
              {' '}
            </span>
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
        {full_name}
        {' '}
        is a GitHub repository owned by
        {' '}
        {author_name}
        . It has garnered attention with
        {stargazers_count}
        {' '}
        stars and
        has
        {watchers}
        {' '}
        watchers. The repository has been forked
        {forks}
        {' '}
        times and was last updated
        on
        {updatedDate}
        .
      </p>
      <div className="flex gap-4 flex-wrap items-center justify-between">
        <p className="text-xs">
          Last updated on
          <b className="text-gray-600">{updatedDate}</b>
        </p>
        <Button href={`/repository/${id}`}>
          Read More
          <ArrowRight />
        </Button>
      </div>
    </li>
  );
};

export default RepositoryItem;
