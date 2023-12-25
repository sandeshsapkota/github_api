import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { addCommasToNumber } from '@/utils/helpers/date.utils';

import { DetailLabelValue } from '@/@types/common';

import ArrowRight from '@/assets/icons/arrow-right.svg?react';
import VisitSiteIcon from '@/assets/icons/visit-site.svg?react';
import Button from '@/components/button';
import RepositoryService from '@/services/repository.service';
import ReadMeContent from '@/pages/detail/partials/ReadMeContent';

type RepositoryInfo = {
  name: string;
  full_name?: string | null;
  html_url: string;
  owner_name: string;
  profile_url: string;
  default_branch: string;
  open_issues_count: number;
};

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

function Detail() {
  /*
   * fetching data from localStorage
   * we have saved the repo information when user click to read more link
   * */
  const repositoryString: string | null = localStorage.getItem('repository');
  const repository: RepositoryInfo = repositoryString
    ? JSON.parse(repositoryString)
    : {};

  const {
    name,
    full_name,
    html_url,
    owner_name,
    profile_url,
    default_branch,
    open_issues_count,
  } = repository;

  const navigate = useNavigate();

  /*
   * FETCH README CONTENT
   * */
  const { isLoading: isLoadingReadMe, data } = useQuery({
    queryKey: [],
    queryFn: () =>
      RepositoryService.fetchRepositoryReadMe({
        repoName: name,
        username: owner_name,
      }),
  });

  const header = () => (
    <div className="flex justify-between">
      <Button type="secondary" onClick={() => navigate(-1)}>
        <span className="-rotate-180">
          <ArrowRight className="w-6 h-5" />
        </span>
        Go Back
      </Button>
      <Button href={profile_url} targetBlank>
        <VisitSiteIcon />
        visit profile
      </Button>
    </div>
  );

  const projectInfoArray: DetailLabelValue[] = [
    {
      label: 'Visit repository',
      value: full_name as string,
      link: html_url,
    },
    {
      label: 'Owner',
      value: owner_name,
      link: profile_url,
    },
    { label: 'Default Branch', value: default_branch },
    {
      label: 'Open Issues',
      value: addCommasToNumber(open_issues_count),
    },
  ];

  return (
    <section className="min-h-screen py-6 sm:py-8">
      <div className="container grid gap-4 sm:gap-8">
        {header()}
        <div className="grid gap-8">
          <h1 className="text-3xl font-bold">{repository?.name}</h1>
          <div className="grid bg-gray-50  p-5 rounded-xl gap-2 ">
            {projectInfoArray.map((info: DetailLabelValue) => (
              <ProjectInfo
                label={info.label}
                value={info.value}
                link={info.link}
                key={info.value}
              />
            ))}
          </div>
          <div className="bg-gray-100 p-6 rounded-xl overflow-auto">
            <h1 className="text-3xl font-bold mb-5">README.md</h1>
            <ReadMeContent
              content={data?.data?.content}
              isLoading={isLoadingReadMe}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
