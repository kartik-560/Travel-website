import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]);

  // This components get's rendered in the home first 
  // hence we need to add the pathname here so that when the path changes the dependencies 
  // changes and the scrollTo  function can work again
  return null; // No UI component to render
};

export default ScrollToTop;
