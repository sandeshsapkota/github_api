import { LabelValueType } from '@/@types/common';
import SortButton from '@/pages/home/partials/filter/SortButton';

const SortSection = ({
  title, options, selectedValue, type, handleSortChange,
}: {
  title: string,
  options: LabelValueType[],
  selectedValue: string,
  type: string
  handleSortChange: (type: string, option: string) => void
}) => (
  <div className="grid gap-1.5 text-sm">
    <span className="text-gray-600">{title}</span>
    <div className="flex text-black rounded-md overflow-hidden">
      {options.map((option) => (
        <SortButton
          key={option.label}
          option={option}
          isActive={option?.value === selectedValue}
          onClick={() => handleSortChange(type, option?.value)}
        />
      ))}
    </div>
  </div>
);

export default SortSection;
