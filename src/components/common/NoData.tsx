import IllustrationWrapper from '@/components/common/IllustrationWrapper';

import NoDataFoundIllustration from '@/assets/icons/no-data-found-illustration.svg?react';

const NoData = () => (
  <IllustrationWrapper message="Sorry, no data found ! Please, try again.">
    <NoDataFoundIllustration className="w-64 md:w-72 h-64 md:h-72 opacity-70" />
  </IllustrationWrapper>
);

export default NoData;
