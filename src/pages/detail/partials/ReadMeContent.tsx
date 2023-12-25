import ReactMarkDown from 'react-markdown';

const ReadMeContent = (props: { content: any; isLoading: boolean }) => {
  const { isLoading, content: rawContent } = props;
  const html = props?.content && atob(rawContent);

  if (isLoading) {
    return (
      <div className="grid gap-10">
        <div className="grid gap-5">
          <div className="w-96 h-4 bg-gray-200 rounded-full" />
          <div className="grid gap-2">
            <div className="h-4 bg-gray-200 rounded-full w-[98%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[95%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[99%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[92%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[100%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[40%] " />
          </div>
        </div>
        <div className="grid gap-5">
          <div className="w-96 h-4 bg-gray-200 rounded-full" />
          <div className="grid gap-2">
            <div className="h-4 bg-gray-200 rounded-full w-[98%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[95%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[99%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[92%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[100%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[40%] " />
          </div>
        </div>
        <div className="grid gap-5">
          <div className="w-96 h-4 bg-gray-200 rounded-full" />
          <div className="grid gap-2">
            <div className="h-4 bg-gray-200 rounded-full w-[98%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[95%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[99%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[92%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[100%]" />
            <div className="h-4 bg-gray-200 rounded-full w-[40%] " />
          </div>
        </div>
      </div>
    );
  }

  return <ReactMarkDown className="reactMarkDown">{html}</ReactMarkDown>;
};

export default ReadMeContent;
