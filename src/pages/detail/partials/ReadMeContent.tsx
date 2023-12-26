import ReactMarkDown from 'react-markdown';
import ReadMeSkeleton from '@/pages/detail/partials/ReadMeSkeleton';

const ReadMeContent = (props: { content: any; isLoading: boolean }) => {
  const { isLoading, content: rawContent } = props;
  const html = props?.content && atob(rawContent);

  if (isLoading) {
    return <ReadMeSkeleton />;
  }

  return <ReactMarkDown className="reactMarkDown">{html}</ReactMarkDown>;
};

export default ReadMeContent;
