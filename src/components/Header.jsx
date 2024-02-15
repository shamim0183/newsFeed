import React, { useState, useRef } from 'react';
import Logo from '../assets/logo.png';
import Search from '../assets/icons/search.svg';
import World from '../assets/world.svg';
import useNewsQuery from '../hooks/useNewsQuery';
import useDebounce from './useDebounce';

const Header = ({ setSelectedCategory }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 200); // Debounce the search query
  const inputRef = useRef(null);

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsInputVisible(false);
      setSearchQuery(''); // Clear the search query when clicking outside the input field
    }
  };

  document.addEventListener('mousedown', handleOutsideClick);

  // Fetch news based on search query if debouncedSearchQuery is not empty, otherwise fetch all news
  const { loading, error, news: filteredNews } = useNewsQuery(null, debouncedSearchQuery ? debouncedSearchQuery : null);

  console.log('Search query:', debouncedSearchQuery); // Add this console.log statement

  return (
    <div>
      <nav className="border-b border-black py-6 md:py-8">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <img src={World} alt="World" />
            <span>Thursday, February 25, 2021</span>
          </div>
          <a href="/">
            <img className="max-w-[100px] md:max-w-[165px]" src={Logo} alt="Lws" />
          </a>
          <div className="flex items-center space-x-3 lg:space-x-8 relative">
            <img
              src={Search}
              onClick={toggleInputVisibility}
              className="cursor-pointer"
            />
            {isInputVisible && (
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="absolute top-0 right-0 px-4 py-2 border rounded-md focus:outline-none focus:border-black transition-all duration-300"
                style={{ transform: 'translateX(0%)' }}
                placeholder="Search"
              />
            )}
          </div>
        </div>
        <div className="container mx-auto mt-6">
          <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
            <li><a href="#" onClick={() => setSelectedCategory('general')}>General </a></li>
            <li><a href="#" onClick={() => setSelectedCategory('business')}>Business</a></li>
            <li><a href="#" onClick={() => setSelectedCategory('entertainment')}>Entertainment</a></li>
            <li><a href="#" onClick={() => setSelectedCategory('health')}>Health</a></li>
            <li><a href="#" onClick={() => setSelectedCategory('science')}>Science</a></li>
            <li><a href="#" onClick={() => setSelectedCategory('sports')}>Sports</a></li>
            <li><a href="#" onClick={() => setSelectedCategory('technology')}>Technology</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
