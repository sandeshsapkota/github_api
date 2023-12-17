import {LabelValueType} from "@/@types/common";
import {pagesOptions, orderingOptions} from "@/utils/constants/common.ts";

import Dropdown from "@/pages/home/partials/Dropdown.tsx";

interface SearchFilterTypes {
    handleSortChange: (type: 'ordering' | 'perPage', value: string) => void
    selectedOrdering: string
    selectedPerPage: string
}

const SearchFilter = ({handleSortChange, selectedOrdering, selectedPerPage}: SearchFilterTypes) => {

    const SortButton = ({option, selectedType, type}: {
        option: LabelValueType,
        selectedType: string,
        type: 'ordering' | 'perPage'
    }) => (
        <button
            onClick={() => handleSortChange(type, option?.value)}
            className={`font-medium ${option.value === selectedType ? 'bg-[#222] text-white sort-btn-bg-image' : 'bg-gray-100 hover:bg-gray-200  text-black'} tracking-wide py-4 sm:py-5 px-2 flex flex-1 items-center justify-center transition duration-200`}>
            {option.label}
        </button>
    );

    const SortSection = ({title, options, selectedType, type}: {
        title: string,
        options: LabelValueType[],
        selectedType: string,
        type: 'ordering' | 'perPage'
    }) => (
        <div className="grid gap-1.5 text-sm">
            <span className="text-gray-600">{title}</span>
            <div className="flex text-black rounded-md overflow-hidden">
                {options.map((option) => (
                    <SortButton key={option.label} option={option} selectedType={selectedType} type={type}/>
                ))}
            </div>
        </div>
    );

    const Trigger = () => {
        return (
            <div className="flex gap-2.5 items-center rounded-xl hover:bg-gray-100 px-4 py-[18px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={22}>
                    <path
                        d="M3,6.75H13.37a2.73,2.73,0,0,0,5.26,0H21a.75.75,0,0,0,0-1.5H18.63a2.73,2.73,0,0,0-5.26,0H3a.75.75,0,0,0,0,1.5Zm13-2A1.25,1.25,0,1,1,14.75,6,1.25,1.25,0,0,1,16,4.75Z"/>
                    <path
                        d="M21,11.25H10.63a2.73,2.73,0,0,0-5.26,0H3a.75.75,0,0,0,0,1.5H5.37a2.73,2.73,0,0,0,5.26,0H21a.75.75,0,0,0,0-1.5Zm-13,2A1.25,1.25,0,1,1,9.25,12,1.25,1.25,0,0,1,8,13.25Z"/>
                    <path
                        d="M21,17.25H18.63a2.73,2.73,0,0,0-5.26,0H3a.75.75,0,0,0,0,1.5H13.37a2.73,2.73,0,0,0,5.26,0H21a.75.75,0,0,0,0-1.5Zm-5,2A1.25,1.25,0,1,1,17.25,18,1.25,1.25,0,0,1,16,19.25Z"/>
                </svg>
                Filter
            </div>
        )
    }

    const Content = () => {
        return (
            <div className="absolute right-0 z-[99] bg-white shadow-2xl p-5 sm:p-8 rounded-2xl padding-deducted-vw-width sm:w-[458px] grid gap-6">
                <SortSection title="Items per page"
                             options={pagesOptions}
                             selectedType={selectedPerPage}
                             type={"perPage"}/>
                <SortSection title="Order by"
                             options={orderingOptions}
                             selectedType={selectedOrdering}
                             type={"ordering"}/>
            </div>
        )
    }

    return <Dropdown trigger={<Trigger/>} content={<Content/>}/>
}

export default SearchFilter;
