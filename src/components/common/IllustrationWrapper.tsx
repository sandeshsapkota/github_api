import { ReactNode } from 'react';

import OpacityFader from '@/components/motion/OpacityFader';

function IllustrationWrapper({
  children,
  message,
}: {
  children: ReactNode;
  message: string;
}) {
  return (
    <OpacityFader animate>
      <div className="bg-gray-100 py-10  sm:pt-20 sm:pb-24 px-6 flex flex-col gap-6 items-center justify-center text-center rounded-xl">
        {children}
        <span className="text-sm opacity-60">{message}</span>
      </div>
    </OpacityFader>
  );
}

export default IllustrationWrapper;
