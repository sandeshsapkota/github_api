import IllustrationWrapper from '@/components/common/IllustrationWrapper';
import ServerErrorIllustration from '@/assets/icons/server-error-illustration.svg?react';

function SearchError() {
  return (
    <IllustrationWrapper message="Something went wrong while fetching the data. Please try again !">
      <ServerErrorIllustration className="w-64 md:w-[500px] h-64 md:h-96 opacity-80" />
    </IllustrationWrapper>
  );
}

export default SearchError;
