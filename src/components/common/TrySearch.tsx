import IllustrationWrapper from '@/components/common/IllustrationWrapper.tsx';
import TrySearchIllustration from '@/assets/icons/try-search-illustration.svg?react';

function TrySearch() {
  return (
    <IllustrationWrapper message="Try searching the repository by adding keyword on searchbar.">
      <TrySearchIllustration />
    </IllustrationWrapper>
  );
}

export default TrySearch;
