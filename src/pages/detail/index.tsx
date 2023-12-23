import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addCommasToNumber, formatDate } from '@/utils/helpers/date.utils';

import { RootState } from '@/store/store';
import { RepositoryType } from '@/@types/repository';
import { DetailLabelValue } from '@/@types/common';

import ArrowRight from '@/assets/icons/arrow-right.svg?react';
import VisitSiteIcon from '@/assets/icons/visit-site.svg?react';
import Button from '@/components/button';

function Detail() {
  /*
   * STATE
   * */
  const { id } = useParams();
  const repositories = useSelector(
    (state: RootState) => state.list?.repositories,
  );

  const repository: RepositoryType = repositories.find(
    (item: RepositoryType) => item?.id === Number(id),
  );
  const { html_url: ownerProfileUrl } = repository?.owner || {};

  const header = () => (
    <div className="flex justify-between">
      <Button href="/" type="secondary">
        <span className="-rotate-180">
          <ArrowRight className="w-6 h-5" />
        </span>
        Go Back
      </Button>
      <Button href={ownerProfileUrl} targetBlank>
        <VisitSiteIcon />
        visit profile
      </Button>
    </div>
  );

  const projectInfoArray: DetailLabelValue[] = [
    {
      label: 'Repository',
      value: repository.full_name,
      link: repository.html_url,
    },
    {
      label: 'Owner',
      value: repository.owner.login,
      link: repository.owner.html_url,
    },
    { label: 'Default Branch', value: repository.default_branch },
    {
      label: 'Open Issues',
      value: addCommasToNumber(repository.open_issues_count),
    },
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

  const ProjectInfo = ({
    label,
    value,
    link = undefined,
  }: {
    label: string;
    value: string | number;
    link?: string | undefined;
  }) => (
    <p className="text-sm">
      <strong>{label}:</strong>
      {link ? (
        <a className="text-blue-500 text-sm pl-1" href={link}>
          {value}
        </a>
      ) : (
        <span className="pl-1">{value}</span>
      )}
    </p>
  );

  return (
    <section className="min-h-screen py-6 sm:py-8">
      <div className="container grid gap-6 sm:gap-8">
        {header()}
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
