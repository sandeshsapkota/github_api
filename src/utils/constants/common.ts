import { LabelValueType } from '@/@types/common';

const pagesOptions: LabelValueType[] = [
  { value: 10, label: '10' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
];

const orderingOptions: LabelValueType[] = [
  { value: 'asc', label: 'Ascending' },
  { value: 'dsc', label: 'Descending' },
];

export { pagesOptions, orderingOptions };
