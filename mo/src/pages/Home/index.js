import React, { useState } from 'react'
import Header from '../../components/home/Header';
import SearchBar from '../../components/home/search bar';
import BlogList from '../../components/home/blogList';
import EmptyList from '../../components/common/EmptyList/EL';
import { blogList } from '../../config/data';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };
  

  return (
    <div>

   <Header />

   <SearchBar 
   value={searchKey}
   clearSearch={handleClearSearch}
   formSubmit={handleSearchBar}
   handleSearchKey={(e) => setSearchKey(e.target.value)}
   />
   
   {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

    </div>
  );
;}

export default Home
