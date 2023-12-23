import SearchPage from '@/pages/search';
import Detail from '@/pages/detail';

const routes = [
  {
    path: '/',
    element: <SearchPage />,
  },
  {
    path: '/repository/:id',
    element: <Detail />,
  },
];

export default routes;
