import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  /*
   * REDIRECTING TO SEARCH PAGE
   * */
  useEffect(() => {
    navigate('/search');
  }, [navigate]);
  return '';
};

export default Home;
