import React, { useState } from 'react';
import arrow from './../assets/arrow-left.png';
import DataFetch from './DataFetch';
import tick from './../assets/tick.png';


const Main = () => {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Recommended');
  const [showFilters, setShowFilters] = useState(true);
  const [showIdealForOptions, setShowIdealForOptions] = useState(false);
  const [idealForSelections, setIdealForSelections] = useState({
    men: false,
    women: false,
    babyAndKids: false,
  });

  const sortOptions = [
    'Recommended',
    'Newest First',
    'Popular',
    'Price: High to Low',
    'Price: Low to High',
  ];

  const filters = [
    'Customizable',
    'Ideal For',
    'Occasion',
    'Work',
    'Fabric',
    'Segment',
    'Suitable For',
    'Raw Materials',
    'Pattern',
  ];

  const handleIdealForCheckboxChange = (option) => {
    setIdealForSelections((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const unselectAllIdealFor = () => {
    setIdealForSelections({
      men: false,
      women: false,
      babyAndKids: false,
    });
  };

  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-center px-4 pt-20 pb-8 text-center">
        <h1 className="uppercase text-[#252020] font-simplon font-extralight text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px] leading-tight tracking-[2px] mb-4">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="font-simplon text-[#252020] text-[16px] sm:text-[18px] md:text-[20px] max-w-3xl pt-4 tracking-[0.5px]">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
      <div className='block md:hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='border-y border-[#E5E5E5] mt-6 px-4 py-6 pl-16 flex flex-row justify-center items-center gap-4'>
          <h1 className='font-bold text-[18px]'>FILTER</h1>
          <div className='h-6 border-r border-gray-400 mx-4'></div>
          <div className='flex flex-col items-center'>

          <div
              className="relative flex items-center gap-2 font-bold uppercase cursor-pointer text-[#252020] text-[18px] sm:text-[16px] font-simplon"
              onClick={() => setShowSortOptions((prev) => !prev)}
            >
              <span>{selectedSort}</span>
              <img
                src={arrow}
                alt="sort arrow"
                className={`w-4 h-4 transition-transform duration-200 ${showSortOptions ? 'rotate-180' : ''}`}
              />
            </div>
            {showSortOptions && (
              <div className="absolute left-[63rem] top-9 mt-2 bg-white border border-[#E5E5E5] shadow-lg z-50 w-56">
                {sortOptions.map((option) => (
                  <div
                    key={option}
                    className={` hover:bg-gray-100 text-right cursor-pointer flex items-end px-4 py-2 justify-between top-4 ${
                      selectedSort === option ? 'font-bold text-[#252020]' : 'text-[#252020]'
                    }`}
                    onClick={() => {
                      setSelectedSort(option);
                      setShowSortOptions(false);
                    }}
                  >
                    {selectedSort === option && <span className="text-black text-lg">
                      <img src={tick} alt='tick' className='w-4 h-4 ' /></span>}
                    <span className='items-end'>{option}</span>
                  </div>
                ))}
              </div>
            )}</div>
            </div>
        </div>
      </div>

      {/* Filters and Sort Header */}
      <div className="hidden sm:block border-y border-[#E5E5E5] mt-6 px-4 py-6 sm:py-8 sm:px-8 md:px-10 lg:mx-20">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Item Count & Filter Toggle */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-[#252020] text-[14px] sm:text-[16px] font-simplon">
              <h1 className="font-bold">3425 ITEMS</h1>
              <div
                className="flex items-center gap-2 cursor-pointer text-[#888792] underline"
                onClick={() => setShowFilters((prev) => !prev)}
              >
                <img
                  src={arrow}
                  alt="toggle filters"
                  className={`w-4 h-4 transition-transform duration-200 ${showFilters ? 'rotate-90' : '-rotate-90'}`}
                />
                <span>{showFilters ? 'HIDE FILTER' : 'SHOW FILTER'}</span>
              </div>
            </div>

            {/* Sort Dropdown Toggle */}
            <div
              className="relative flex items-center gap-2 font-bold uppercase cursor-pointer text-[#252020] text-[14px] sm:text-[16px] font-simplon"
              onClick={() => setShowSortOptions((prev) => !prev)}
            >
              <span>{selectedSort}</span>
              <img
                src={arrow}
                alt="sort arrow"
                className={`w-4 h-4 transition-transform duration-200 ${showSortOptions ? 'rotate-180' : ''}`}
              />
            </div>

            {/* Sort Dropdown List */}
            {showSortOptions && (
              <div className="absolute left-[63rem] top-9 mt-2 bg-white border border-[#E5E5E5] shadow-lg z-50 w-56">
                {sortOptions.map((option) => (
                  <div
                    key={option}
                    className={` hover:bg-gray-100 text-right cursor-pointer flex items-end px-4 py-2 justify-between text-sm top-4 ${
                      selectedSort === option ? 'font-bold text-[#252020]' : 'text-[#252020]'
                    }`}
                    onClick={() => {
                      setSelectedSort(option);
                      setShowSortOptions(false);
                    }}
                  >
                    {selectedSort === option && <span className="text-black text-lg">
                      <img src={tick} alt='tick' className='w-4 h-4 ' /></span>}
                    <span className='items-end'>{option}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row px-4 py-6 w-full max-w-7xl mx-auto gap-6">
        {/* Sidebar Filters */}
        {showFilters && (
          <div className="w-full lg:w-1/4 hidden sm:block">
            {filters.map((filter) => (
              <div key={filter} className="flex flex-col gap-2 border-b border-[#E5E5E5] pb-3 mb-3">
                <div
                  className="flex justify-between items-center text-[#252020] text-[14px] sm:text-[16px] font-semibold uppercase font-simplon cursor-pointer"
                  onClick={filter === 'Ideal For' ? () => setShowIdealForOptions((prev) => !prev) : undefined}
                >
                  {filter === 'Customizable' ? (
                    <div className="flex items-center">
                      <input type="checkbox" className="accent-[#252020] mr-2 w-5 h-5" />
                      <span>{filter}</span>
                    </div>
                  ) : (
                    <>
                      <span>{filter}</span>
                      <img
                        src={arrow}
                        alt="arrow"
                        className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                          filter === 'Ideal For' && showIdealForOptions ? 'rotate-180' : ''
                        }`}
                      />
                    </>
                  )}
                </div>

                {filter !== 'Customizable' && <div className="text-[#252020] text-[12px] mt-1">ALL</div>}

                {/* Ideal For Filters */}
                {filter === 'Ideal For' && showIdealForOptions && (
                  <div className="mt-2 ml-2 text-left">
                    <button
                      className="text-sm text-[#252020] underline mb-2"
                      onClick={unselectAllIdealFor}
                    >
                      Unselect All
                    </button>
                    <div className="flex flex-col gap-1 text-sm text-[#252020]">
                      {Object.entries(idealForSelections).map(([key, value]) => (
                        <label key={key} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={() => handleIdealForCheckboxChange(key)}
                          />
                          {key === 'babyAndKids' ? 'Baby & Kids' : key.charAt(0).toUpperCase() + key.slice(1)}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Data Display Section */}
        <div className="w-full">
          <DataFetch />
        </div>
      </div>
    </>
  );
};

export default Main;
