import Star from '@/assets/icons/star.svg?react';
import Forks from '@/assets/icons/fork.svg?react';
import Watchers from '@/assets/icons/watcher.svg?react';

interface StatTypes {
  stargazers_count: string,
  watchers: string,
  forks: string
}

const RepositoryStats = (props: StatTypes) => {
  /*
  * PROPS AND STATES
  * */
  const { stargazers_count, forks, watchers } = props;

  const stats = [
    {
      label: `${stargazers_count} stars`,
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
