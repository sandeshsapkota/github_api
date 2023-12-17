import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addCommasToNumber, formatDate } from '@/utils/helpers/date.utils';

import { RootState } from '@/store/store';
import { RepositoryType } from '@/@types/repository';
import { DetailLabelValue } from '@/@types/common';

import ArrowRight from '@/assets/icons/arrow-right.svg?react';

function Detail() {
  /*
      * STATE
      * */
  const { id } = useParams();
  const repositories = useSelector((state: RootState) => state.list?.repositories);

  const repository: RepositoryType = repositories
    .find((item: RepositoryType) => item?.id === Number(id));
  const { html_url: ownerProfileUrl } = repository?.owner || {};

  const ProfileButton = () => (
    <Link
      to={ownerProfileUrl}
      target="_blank"
      className="flex select-none items-center gap-2 rounded-full py-2  px-4 text-center align-middle font-sans text-xs font-bold capitalize  transition-all bg-black hover:bg-black/80 text-white border-black border disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
        <path
          d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"
        />
      </svg>
      visit profile
    </Link>
  );

  const Header = () => (
    <div className="flex justify-between">
      <Link
        to="/"
        className="inline-flex whitespace-nowrap mr-auto select-none items-center gap-2 rounded-full py-2  px-4 text-center align-middle font-sans text-xs font-bold capitalize  transition-all bg-gray-100 hover:bg-gray-200 text-gray-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <span className="-rotate-180"><ArrowRight /></span>
        Go Back
      </Link>
      <ProfileButton />
    </div>
  );

  const projectInfoArray: DetailLabelValue[] = [
    { label: 'Repository', value: repository.full_name, link: repository.html_url },
    { label: 'Owner', value: repository.owner.login, link: repository.owner.html_url },
    { label: 'Default Branch', value: repository.default_branch },
    { label: 'Open Issues', value: addCommasToNumber(repository.open_issues_count) },
    { label: 'Description', value: repository?.description },
    { label: 'Language', value: repository?.language },
    { label: 'Size', value: `${addCommasToNumber(repository.size)} KB` },
    { label: 'Stars', value: addCommasToNumber(repository.stargazers_count) },
    { label: 'Watchers', value: addCommasToNumber(repository.watchers_count) },
    { label: 'Forks', value: addCommasToNumber(repository.forks_count) },
    { label: 'Created At', value: formatDate(repository.created_at) },
    { label: 'Last Updated', value: formatDate(repository.updated_at) },
    { label: 'Latest Pushed At', value: formatDate(repository.pushed_at) },
  ];

  const ProjectInfo = ({ label, value, link = undefined }: {
    label: string,
    value: string | number,
    link?: string | undefined
  }) => (
    <p className="text-sm">
      <strong>
        {label}
        :
      </strong>
      {link ? <a className="text-blue-500 text-sm pl-1" href={link}>{value}</a> : <span className="pl-1">{value}</span>}
    </p>
  );

  return (
    <section className="min-h-screen py-6 sm:py-8">
      <div className="container grid gap-6 sm:gap-8">
        <Header />
        <div className="bg-gray-100 p-5 sm:p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-4">{repository?.name}</h1>
          <div className="grid gap-2">
            {projectInfoArray.map((info: DetailLabelValue) => (
              <ProjectInfo
                label={info.label}
                value={info.value}
                link={info.link}
                key={info.value}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
