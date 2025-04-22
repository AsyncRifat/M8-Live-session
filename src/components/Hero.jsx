import React, { useState } from 'react';
import bannerImg from '../assets/banner.png';
import Button from './ui/Button';

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');
  // console.log(searchText);

  return (
    <>
      <div className="py-5">
        <img
          src={bannerImg}
          alt="Banner Image"
          className="w-full mx-auto md:max-w-xl"
        />
        <div className="text-center space-y-2">
          <h1 className="font-thin text-7xl text-gray-800">
            Browser, Search, View, Buy
          </h1>
          <p className="text-gray-500">
            Best place to browse, search, view details and purchase of top,
            flagship phones <br /> of the current time - FlagshipFaceOff
          </p>
          <form
            onSubmit={e => {
              handleSearch(e, searchText);
              // reset input state
              setSearchText('');
            }}
            className="flex flex-col md:flex-row md:gap-3 justify-center items-center mb-4 md:px-24"
          >
            <input
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              type="text"
              placeholder="Search Phone by Name"
              className="bg-white border-gray-200 rounded shadow-sm w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mb-0"
            />

            <Button type="submit" label="Search"></Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
