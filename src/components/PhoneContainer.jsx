import React, { useEffect, useState } from 'react';
import PhoneCart from './PhoneCart';

const PhoneContainer = ({ phones }) => {
  // console.log(phones);
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAllPhones, setShowAllPhone] = useState(false);

  useEffect(() => {
    if (showAllPhones) {
      setDisplayPhones(phones);
    } else {
      setDisplayPhones(phones.slice(0, 6));
    }
  }, [phones, showAllPhones]);

  return (
    <div>
      <h1>phone container: {phones.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPhones.map(phone => (
          <PhoneCart key={phone.id} phone={phone}></PhoneCart>
        ))}
      </div>

      {/* prv => !prv || !showAllPhones */}
      <button
        onClick={() => {
          setShowAllPhone(prv => !prv);
          if (showAllPhones) {
            window.scrollTo(0, 400);
          }
        }}
        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-xl group cursor-pointer mt-5"
      >
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-700 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-cyan-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          {showAllPhones ? 'Show Less' : 'Show All'}
        </span>
      </button>
    </div>
  );
};

export default PhoneContainer;
