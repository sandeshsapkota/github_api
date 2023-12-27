import Star from '@/assets/icons/star.svg?react';
import Forks from '@/assets/icons/fork.svg?react';
import Watchers from '@/assets/icons/watcher.svg?react';

interface StatTypes {
  stargazers_count: number;
  watchers: number;
  forks: number;
}

const RepositoryStats = (props: StatTypes) => {
  /*
   * PROPS
   * */
  const { stargazers_count, forks, watchers } = props;

  const stats = [
    {
      label: `${stargazers_count} ${
        stargazers_count === 1 ? 'star' : 'stars'
      } `,
      component: <Star />,
    },
    {
      label: `${watchers} watching`,
      component: <Watchers />,
    },
    {
      label: `${forks} forks`,
      component: <Forks />,
    },
  ];

  return (
    <div className="flex flex-wrap text-gray-500 text-xs font-medium capitalize  gap-3">
      {stats.map((item) => {
        const { label, component } = item;
        return (
          <div className="flex gap-1.5 items-center" key={label}>
            {component}
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default RepositoryStats;
