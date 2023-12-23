import { LabelValueType } from '@/@types/common';

const SortButton = ({
  option,
  isActive,
  onClick,
}: {
  option: LabelValueType;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    type="button"
    className={`font-medium ${
      isActive
        ? 'bg-[#222] text-white sort-btn-bg-image'
        : 'bg-gray-100 hover:bg-gray-200  text-black'
    } tracking-wide py-4 sm:py-5 px-2 flex flex-1 items-center justify-center transition duration-200`}
  >
    {option.label}
  </button>
);

export default SortButton;
