import { generateIncrementalArray } from '@/utils/helpers/common.utils';

const Skeleton = () => {
  return (
    <li className="animate-pulse bg-gray-100 hover:bg-gray-100  transition duration-300 rounded-xl p-5 md:p-8 shadow grid gap-5">
      <div className="flex gap-6 flex-wrap justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10  bg-gray-200 rounded-full" />
          <div className="grid gap-2.5">
            <div className="h-2.5 bg-gray-200 rounded-full w-24" />
            <div className="w-20 h-2 bg-gray-200 rounded-full" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="h-2.5 bg-gray-200 rounded-full w-16" />
          <div className="h-2.5 bg-gray-200 rounded-full w-16" />
          <div className="h-2.5 bg-gray-200 rounded-full w-16" />
        </div>
      </div>
      <div className="grid gap-2.5 pr-8">
        <div className="h-2.5 bg-gray-200 rounded-full" />
        <div className="h-2.5 bg-gray-200 rounded-full w-2/3" />
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="self-end h-2.5 bg-gray-200 rounded-full w-40 sm:w-48" />
        <div className="h-5 sm:h-7 bg-gray-200 rounded-full w-20 sm:w-28" />
      </div>
    </li>
  );
};

const RepositorySkeleton = ({ perPage }: { perPage: number }) => {
  return (
    <div className="grid gap-6">
      {generateIncrementalArray(perPage).map((item: number) => (
        <Skeleton key={item} />
      ))}
    </div>
  );
};

export default RepositorySkeleton;
