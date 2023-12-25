import SearchPage from '@/pages/search';
import Detail from '@/pages/detail';
import Home from '@/pages/home';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/repository/:id',
    element: <Detail />,
  },
];

export default routes;
